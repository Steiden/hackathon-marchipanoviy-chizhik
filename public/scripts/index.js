function generateResultCard(result) {
	const card = document.createElement("div");
	card.classList.add("result-card");
	card.innerHTML = `
      <div class="result-image"></div>
      <div>
        <h3 class="result-title">${result.name}</h3>
        <p class="result-label">State: ${result.state_name}</p>
        <p class="result-label">Conutry: ${result.country_name}</p>
      </div>

    `;
	return card;
}

document.getElementById("searchForm").addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
	event.preventDefault();

	try {
		const formData = new FormData(event.target);
		let query = formData.get("query");

		const response = await fetch("/search", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: query,
			}),
		});

		if (!response.ok) {
			throw new Error("Error sending request: " + response.status);
		}

		const data = await response.json();

		const resultsContainer = document.getElementById("results");
		resultsContainer.innerHTML = "";
		data.results.forEach((result) => {
			const resultCard = generateResultCard(result);
			resultsContainer.appendChild(resultCard);
		});
	} catch (error) {
		console.error(error);
	}
}
