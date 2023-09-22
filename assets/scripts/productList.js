//productList.js
import ProductItem from "./productItem.js";

class ProductList {
  constructor(shoppingCart) {
    this.products = [];
    this.shoppingCart = shoppingCart;
    this.filteredProducts = [];
  }
  //=====================
  //Fetch fake store api
  //=====================
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

  //=====================================
  //Filter the products by the Category
  //=====================================

  //initilize the category cards
  initCategoryCards() {
    const categoryCards = document.querySelectorAll(".choose-category");
    const productCardsListing = document.querySelector(".product-container");

    categoryCards.forEach((card) => {
      card.addEventListener("click", () => {
        const category = card.getAttribute("data-category"); //data-category is the attribute that has the category to filter
        this.filterProductsByCategory(category); //take care of only those category, --call filterProductsByCategory()--
        productCardsListing.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  //filter products by category
  filterProductsByCategory(category) {
    this.filteredProducts = this.products.filter(
      (product) => product.category === category
    );
    this.renderProducts();
  }
  //render products that has same category name with choosen category
  renderProducts() {
    const productListElement = document.querySelector(".product-cards");
    productListElement.innerHTML = ""; //clear existing products
    this.filteredProducts.forEach((productInfo) => {
      const product = new ProductItem(productInfo, this.shoppingCart);
      productListElement.appendChild(product.render());
    });
  }
}

export default ProductList;
