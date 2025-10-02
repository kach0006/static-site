const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const listHeader = (document.querySelector(".list-header").textContent = category);
// const breadcrumb = (document.querySelector(".breadcrumb").textContent = category);
const breadcrumbs = document.querySelector(".breadcrumbs");

const prodListContainer = document.querySelector(".product-list-container");

document.querySelector(".filter-section").addEventListener("click", showFiltered);
document.querySelector(".sorting-section").addEventListener("click", showSorted);

function showSorted(event) {
  if (event.target.tagName !== "BUTTON") return;
  const direction = event.target.dataset.direction;
  if (direction == "lo-hi") {
    currentData.sort((a, b) => a.price - b.price);
    console.log(allData);
  } else {
    currentData.sort((a, b) => b.price - a.price);
  }
  showProds(currentData);
}

function showFiltered(event) {
  if (event.target.tagName !== "BUTTON") return;
  console.log(event.target.dataset.gender);
  const gender = event.target.dataset.gender;
  if (gender == "All") {
    currentData = allData;
  } else {
    const selection = allData.filter((product) => product.gender == gender);
    currentData = selection;
  }
  showProds(currentData);
}

let allData, currentData;

const myRange = document.querySelector("#range");
const maxSum = document.querySelector("#max");
const minSum = document.querySelector("#min");

myRange.addEventListener("input", (e) => (maxSum.textContent = e.target.value));
myRange.addEventListener("change", filterByPrice);

function filterByPrice(e) {
  const maxPrice = Number(e.target.value);
  const filtered = allData.filter((product) => product.price <= maxPrice);
  currentData = filtered;
  showProds(currentData);
  console.log(e.target.value);
}

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`)
  .then((res) => res.json())
  .then((data) => {
    allData = currentData = data;
    showProds(allData);
    showBreadcrumbs(allData);
  });

function showProds(prods) {
  prodListContainer.innerHTML = "";
  prods.forEach((element) => {
    // console.log(element);
    prodListContainer.innerHTML += `
    
      <!-- product-list-item starts here -->
      <div class="product-list-item">
        <div class="product-list-image-container">
          <div class="product-image">
            <a class="product-link" href="product.html?id=${element.id}"
              ><img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt=""
            /></a>
          </div>
          <div class="product-discount-tag ${element.discount && "active"}">${
      element.discount
    }</div>
          <div class="product-stock-tag ${element.soldout && "active"}"></div>
        </div>
        <div class="product-title">
          <a class="product-link" href="product.html?id=${element.id}"
            >${element.productdisplayname}</a
          >
        </div>

        <div class="product-classifiers">
          <div class="product-tag product-type">${element.articletype}</div>
          <div class="product-tag product-brand">${element.brandname}</div>
        </div>

        <div class="product-price">${element.price}</div>
        <div class="product-sale-price ${element.discount && "active"}">${Math.round(
      element.price - (element.price * element.discount) / 100
    )}</div>

        <div><a class="product-about" href="product.html?id=${element.id}">Read more</a></div>
      </div>
<!-- product-list-item ends here -->`;
  });
}

function showBreadcrumbs(crumbs) {
  breadcrumbs.innerHTML = "";
  breadcrumbs.innerHTML += `
<a href="index.html">Start</a><a href="index.html">Categories</a
      ><a class="breadcrumb" href="product-list.html?category=${category}">${category}</a>
`;
}
