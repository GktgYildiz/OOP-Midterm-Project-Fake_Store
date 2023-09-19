class ProductItem {
  constructor(product, cart) {
    this.product = product;
    this.cart = cart;
  }

  addToCart() {
    this.cart.addProduct(this.product);
    console.log(this.cart);
  }

  render() {
    const capitalizedCategory =
      this.product.category.charAt(0).toUpperCase() +
      this.product.category.slice(1);
    const productElement = document.createElement("div");
    productElement.classList.add(`product-item`);
    productElement.classList.add(`product-item-${this.product.id}`);

    productElement.innerHTML = `
      <div class='product-image-frame'> 
        <img class='product-image' src="${this.product.image}" alt="${this.product.title}" />
      </div>
      <h3 class='product-title' >${this.product.title}</h3>
      <div class='product-category'> 
        <img class='product-category-image' src='../assets/styles/images/category.png' />
        <p class='product-category-text' >${capitalizedCategory}</p>
      </div>
      <hr class='product-line'>
      <div class='product-bottom'>
        <div class='product-price'> 
          <img class='product-price-image' src='../assets/styles/images/pricetag.png' />
          <p class='product-price-text' >  $${this.product.price}</p>
        </div>
         <img class='product-addToCart'src='../assets/styles/images/addtocart.svg'>
      </div>
    `;
    // <p class='product-description'>Description: ${this.product.description}</p>

    const addtocartButton = productElement.querySelector(".product-addToCart");
    addtocartButton.addEventListener("click", () => this.addToCart());
    return productElement;
  }
}

export default ProductItem;
