const productsContainer = document.querySelector("#products-container");

if (productsContainer) {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
          <img src="${product.image}">
          <p>${product.description}</p>
          <p>Price: $${product.price.toFixed(2)}</p>
        `;
        productsContainer.appendChild(productElement);
      });
    })
    .catch((error) => console.error(error));
} else {
  console.error("Unable to find products container element.");
}
