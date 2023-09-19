//app.js
import Shop from "./shop.js";

class App {
  // static init() {
  init() {
    const shop = new Shop();
    shop.render();
  }

  static addProductToCart(product) {
    // call this method to add the product to the cart
  }
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded"); // Add this line
  const app = new App();
  app.init();
});
export default App;
