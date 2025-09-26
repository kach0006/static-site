const prodListContainer = document.querySelector(".product-list-container");

fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
  .then((res) => res.json())
  .then(showProds);

function showProds(prods) {
  prods.forEach((element) => {
    console.log(element);
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
