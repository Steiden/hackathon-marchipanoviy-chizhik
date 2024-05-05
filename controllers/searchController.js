const searchController = (req, res) => {
  try {
    // Здесь будет код для обработки запроса поиска
    // В данном примере просто возвращаем заглушку
    console.log(req.body.query);
    const results = [
      { title: "Результат 1", description: "Описание результата 1", link: "#" },
      { title: "Результат 2", description: "Описание результата 2", link: "#" },
    ];
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

module.exports = searchController;
