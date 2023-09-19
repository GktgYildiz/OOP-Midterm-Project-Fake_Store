// //productList.js
// import ProductItem from "./productItem.js";
// class ProductList {
//   constructor() {
//     this.products = [];
//   }
//   async fetchProducts() {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       this.products = data;
//       this.render();
//     } catch (err) {
//       console.log("Error while fetching products: " + err.message);
//     }
//   }
//   render() {
//     const productListElement = document.querySelector(".product-cards");

//     this.products.forEach((productInfo) => {
//       const product = new Product(
//         productInfo.id,
//         productInfo.title,
//         productInfo.price,
//         productInfo.description,
//         productInfo.category,
//         productInfo.image
//       );
//       const productItem = new ProductItem(product);
//       productListElement.appendChild(productItem.render());
//       productListElement.append(`<div class='product-${product.id}'>
//       <p>${product.id}</p>
//       <p>${product.title}</p>
//       <p>${product.price}</p>
//       <p>${product.description}</p>
//       <p>${product.category}</p>
//       <img src='${product.image}'></img>
//       </div>`);
//     });
//   }
// }
// export default ProductList;

import ProductItem from "./productItem.js";

class ProductList {
  constructor() {
    this.products = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("Fetched products:", data);
      this.products = data;
      this.render();
    } catch (err) {
      console.log("Error while fetching products: " + err.message);
    }
  }

  render() {
    const productListElement = document.querySelector(".product-cards");

    this.products.forEach((productInfo) => {
      const product = new ProductItem(productInfo);
      console.log("Created product item:", product);
      productListElement.appendChild(product.render());
    });
  }
}

export default ProductList;
