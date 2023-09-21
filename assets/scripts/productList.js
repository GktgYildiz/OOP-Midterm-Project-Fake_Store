// //productList.js
import ProductItem from "./productItem.js";

class ProductList {
  constructor(shoppingCart) {
    this.products = [];
    this.shoppingCart = shoppingCart;
    this.filteredProducts = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
      this.filteredProducts = this.products;
      this.initCategoryCards();
      this.renderProducts();
    } catch (err) {
      console.log("Error while fetching products: " + err.message);
    }
  }

  filterProductsByCategory(category) {
    this.filteredProducts = this.products.filter(
      (product) => product.category === category
    );
    this.renderProducts();
  }
  initCategoryCards() {
    const categoryCards = document.querySelectorAll(".choose-category");
    const productCardsListing = document.querySelector(".product-container");
    categoryCards.forEach((card) => {
      card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");
        this.filterProductsByCategory(category);
        productCardsListing.scrollIntoView({ behavior: "smooth" });
        console.log(category);
      });
    });
  }

  renderProducts() {
    const productListElement = document.querySelector(".product-cards");
    productListElement.innerHTML = "";

    this.filteredProducts.forEach((productInfo) => {
      const product = new ProductItem(productInfo, this.shoppingCart);
      productListElement.appendChild(product.render());
    });
  }
}

export default ProductList;
