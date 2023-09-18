import ProductItem from "./productItem";
class ProductList {
  constructor() {
    this.products = [];
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
    this.products.forEach((productInfo) => {
      const product = new Product(
        productInfo.id,
        productInfo.title,
        productInfo.price,
        productInfo.description,
        productInfo.category,
        productInfo.image
      );
      const productItem = new ProductItem(product);
    });
  }
}
export default ProductList;
