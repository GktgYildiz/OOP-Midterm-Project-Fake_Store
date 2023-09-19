//shop.js
import ProductList from "./productList.js";
import ShoppingCart from "./shoppingCart.js";

class Shop {
  render() {
    const productList = new ProductList();
    const shoppingCart = new ShoppingCart();
    productList.fetchProducts();
    productList.render();
    shoppingCart.render();
  }
}

export default Shop;
