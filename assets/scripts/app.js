//app.js
import Shop from "./shop.js";

class App {
  // static init() {
  init() {
    const shop = new Shop();
    shop.render();
  }

  static addProductToCart(product) {}
}
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
export default App;
