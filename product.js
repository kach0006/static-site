const prodContainer = document.querySelector(".product-container");
const breadcrumbs = document.querySelector(".breadcrumbs");

const params = new URLSearchParams(window.location.search);
const prodId = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${prodId}`)
  .then((res) => res.json())
  //   .then((prod) => {
  //     console.log(prod.articletype);
  //   })
  .then((prod) => {
    prodContainer.innerHTML = `
    <div>
        <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${
          prod.id
        }.webp" alt="1163 Tshirt" />
      </div>
      <div class="product-info-container">
        <h2 class="product-title">${prod.productdisplayname}</h2>
        <div class="product-sku">${prod.id}</div>
        <div class="product-price">${prod.price}</div>
        <div class="product-sale-price ${prod.discount && "active"}">${Math.round(
      prod.price - (prod.price * prod.discount) / 100
    )}</div>
        <div class="product-brand">${prod.brandname}</div>
        <div><a class="basket-btn" href="">Add to basket</a></div>
      </div>`;
    return prod;
  })
  .then((prod) => {
    breadcrumbs.innerHTML = `
    <a href="index.html">Start</a><a href="product-list.html">All products</a
      ><a href="product.html">${prod.articletype}</a><a href="product.html">${prod.productdisplayname}</a>
    `;
  });
