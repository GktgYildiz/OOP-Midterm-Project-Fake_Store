//app.js
import Product from "./product.js";
import Shop from "./shop.js";
import ProductList from "./productList.js";

class App {
  init() {
    const shop = new Shop();
    shop.render();
  }
}

const app = new App();
app.init();
const product = new Product();
const productList = new ProductList(product);

// Add event listeners to category cards
document.getElementById("category-women").addEventListener("click", () => {
  productList.filterProductsByCategory("women");
});

document.getElementById("category-men").addEventListener("click", () => {
  productList.filterProductsByCategory("men");
});

document.getElementById("category-jewelry").addEventListener("click", () => {
  productList.filterProductsByCategory("jewelery");
});

document
  .getElementById("category-electronics")
  .addEventListener("click", () => {
    productList.filterProductsByCategory("electronics");
  });

export default App;
