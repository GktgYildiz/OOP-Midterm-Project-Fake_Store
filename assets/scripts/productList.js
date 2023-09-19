// //productList.js
import ProductItem from "./productItem.js";

class ProductList {
  constructor(shoppingCart) {
    this.products = [];
    this.shoppingCart = shoppingCart; // Store the shoppingCart instance
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
      this.render();
    } catch (err) {
      console.log("Error while fetching products: " + err.message);
    }
  }

  render() {
    const productListElement = document.querySelector(".product-cards");

    this.products.forEach((productInfo) => {
      const product = new ProductItem(productInfo, this.shoppingCart); // Pass the shoppingCart instance
      productListElement.appendChild(product.render());
    });
  }
}

export default ProductList;
