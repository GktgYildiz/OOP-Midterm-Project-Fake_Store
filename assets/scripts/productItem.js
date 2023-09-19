class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {}

  render() {
    const productElement = document.createElement("div");
    productElement.classList.add(`product-item`);
    productElement.classList.add(`product-item-${this.product.id}`);

    productElement.innerHTML = `
      <img class='product-image' src="${this.product.image}" alt="${this.product.title}" />
      <h3 class='product-title' >${this.product.title}</h3>
      <p class='product-price' >Price: $${this.product.price}</p>
      <p class='product-category' >Category: ${this.product.category}</p>
      <button class='product-addToCart'>Add to Cart</button>
    `;
    // <p class='product-description'>Description: ${this.product.description}</p>

    return productElement;
  }
}

export default ProductItem;
