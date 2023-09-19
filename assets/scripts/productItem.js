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
      <div class='product-image-frame'> 
        <img class='product-image' src="${this.product.image}" alt="${this.product.title}" />
      </div>
      <h3 class='product-title' >${this.product.title}</h3>
      <div class='product-category'> 
        <img class='product-category-image' src='../assets/styles/images/category.png' />
        <p class='product-category-text' >${this.product.category}</p>
      </div>
      <hr/>
      <div class='product-price'> 
      
      <img class='product-price-image' src='../assets/styles/images/pricetag.png' />
      <p class='product-price' >  $${this.product.price}</p>
    </div>
      <button class='product-addToCart'>Add to Cart</button>
    `;
    // <p class='product-description'>Description: ${this.product.description}</p>

    return productElement;
  }
}

export default ProductItem;
