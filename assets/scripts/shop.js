import ProductList from "./productList.js";
import ShoppingCart from "./shoppingCart.js";

class Shop {
  render() {
    const shoppingCart = new ShoppingCart();
    const productList = new ProductList(shoppingCart);
    productList.fetchProducts();
    productList.renderProducts();
    shoppingCart.render();
  }
}

export default Shop;
