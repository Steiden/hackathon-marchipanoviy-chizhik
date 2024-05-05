const { transliterate } = require("transliteration");
const fs = require("fs").promises;

// Функция для вычисления расстояния Левенштейна
const levenshtein = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;
  const matrix = [];

  // Инициализация матрицы
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Вычисление расстояния Левенштейна
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
};

// Функция для поиска наиболее похожих результатов
const findMostSimilar = (query, data, threshold) => {
  const results = [];
  data.forEach((item) => {
    const itemName = transliterate(item.name);
    const itemStateName = transliterate(item.state_name);
    const distanceName = levenshtein(
      itemName.toLowerCase(),
      query.toLowerCase()
    );
    const distanceStateName = levenshtein(
      itemStateName.toLowerCase(),
      query.toLowerCase()
    );
    const minDistance = Math.min(distanceName, distanceStateName);
    if (minDistance <= threshold) {
      results.push({
        item,
        similarity:
          1 - minDistance / Math.max(itemName.length, itemStateName.length),
      });
    }
  });
  return results;
};

const searchController = async (req, res) => {
  try {
    const query = req.body.query;

    const json = 

    // Ищем наиболее похожие результаты
    const results = findMostSimilar(query, json, 3);

    // Сортируем результаты по схожести
    results.sort((a, b) => b.similarity - a.similarity);

    // Формируем ответ в формате JSON
    const formattedResults = results.map(({ item }) => ({
      id: item.id,
      name: item.name,
      state_id: item.state_id,
      state_code: item.state_code,
      state_name: item.state_name,
      country_id: item.country_id,
      country_code: item.country_code,
      country_name: item.country_name,
      latitude: item.latitude,
      longitude: item.longitude,
      wikiDataId: item.wikiDataId,
    }));

    res.json({ results: formattedResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = searchController;
