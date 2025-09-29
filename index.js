const catContainer = document.querySelector(".category-container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    catContainer.innerHTML += `
        <a class="category-item" href="product-list.html?category=${category.category}">${category.category}</a>
        `;
  });
}
