import Shop from "./shop.js";

class App {
  static init() {
    const shop = new Shop();
    shop.render();
  }

  static addProductToCart(product) {
    // call this method to add the product to the cart
  }
}

export default App;
