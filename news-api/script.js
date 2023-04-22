const newsContainer = document.querySelector("#news-container");

if (newsContainer) {
  const apiKey = "8d566e5dec464123a4e7d4e3fb627cd2";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");
        articleElement.innerHTML = `
          <h3>${article.title}</h3>
          <img src="${article.urlToImage}">
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(articleElement);
      });
    })
    .catch((error) => console.error(error));
} else {
  console.error("Unable to find news container element.");
}
