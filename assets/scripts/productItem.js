class ProductItem {
  constructor(product, cart, descriptionOpen, productId, maxLines = 2) {
    this.product = product;
    this.cart = cart;
    this.descriptionOpen = false;
    this.productId = `product-${this.product.id}`;
    this.maxLines = maxLines;
  }

  addToCart() {
    this.cart.addProduct(this.product);
    console.log(this.cart);
  }
  toggleDescription() {
    const descriptionToggle = document.querySelector(
      `#${this.productId}-description-text`
    );
    const descriptionContent = document.querySelector(
      `#${this.productId}-description-toggle`
    );
    const chevronIcon = descriptionToggle.querySelector(".fa-chevron-down");
    descriptionToggle.classList.toggle("active");
    chevronIcon.classList.toggle("rotate-90deg");
    if (descriptionToggle.classList.contains("active")) {
      descriptionContent.style.maxHeight =
        descriptionContent.scrollHeight + "px";
      descriptionContent.style.opacity = 1; // Show
      this.descriptionOpen = true;
    } else {
      descriptionContent.style.maxHeight = null;
      descriptionContent.style.opacity = 0; // Hide
      this.descriptionOpen = false;
    }
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
  <h3 class='product-title' id='${this.productId}-title'>${this.product.title}</h3>
      <div class='product-bottom'>
      <div class='product-price'> 
      <img class='product-price-image' src='../assets/styles/images/pricetag.png' />
      <p class='product-price-text' >  $${this.product.price}</p>
      </div>
      <img class='product-addToCart'src='../assets/styles/images/addtocart.svg'>
      </div>
      <hr class='product-line'>
      <div class='product-category'> 
        <div class='product-features-category product-features'>
          <img class='product-category-image' src='../assets/styles/images/category.png' />
          <p class='product-category-text' >${capitalizedCategory}</p>
        </div>
        <div class='product-features-description product-features'>
          <img class='product-description-image' src='../assets/styles/images/description-icon.png' />
          <button class='product-description-text' id='${this.productId}-description-text'>Description <i class="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>
      <div class='product-description-toggle' id='${this.productId}-description-toggle'>
        <p class='product-description'>${this.product.description}</p>
      </div>
    `;
    const titleElement = productElement.querySelector(
      `#${this.productId}-title`
    );
    titleElement.classList.add(
      "truncate-text",
      `truncate-text-${this.maxLines}`
    );
    const addtocartButton = productElement.querySelector(".product-addToCart");
    addtocartButton.addEventListener("click", () => this.addToCart());
    const descriptionButton = productElement.querySelector(
      `#${this.productId}-description-text`
    );
    descriptionButton.addEventListener("click", () => this.toggleDescription());
    return productElement;
  }
}
function addHoverAnimations() {
  const categoryCards = document.querySelectorAll(".choose-category");

  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const circleTopRight = document.createElement("div");
      circleTopRight.classList.add("hover-circle");
      card.appendChild(circleTopRight);

      const circleBottomLeft = document.createElement("div");
      circleBottomLeft.classList.add("hover-circle-bottom-left");
      card.appendChild(circleBottomLeft);

      const circleTopMiddle = document.createElement("div");
      circleTopMiddle.classList.add("hover-circle-top-middle");
      card.appendChild(circleTopMiddle);

      gsap.from(circleTopRight, {
        duration: 0.5,
        scale: 0,
        ease: "power3.inOut",
      });

      gsap.from(circleBottomLeft, {
        duration: 0.5,
        scale: 0,
        ease: "power3.inOut",
      });

      gsap.to(circleTopMiddle, {
        duration: 1,
        scale: 4,
        opacity: 1,
        ease: "sine-out",
      });
    });

    card.addEventListener("mouseleave", () => {
      const circleTopRight = card.querySelector(".hover-circle");
      const circleBottomLeft = card.querySelector(".hover-circle-bottom-left");
      const circleTopMiddle = card.querySelector(".hover-circle-top-middle");

      if (circleTopRight) {
        gsap.to(circleTopRight, {
          duration: 0.5,
          scale: 0,
          ease: "power3.inOut",
          onComplete: () => {
            card.removeChild(circleTopRight);
          },
        });
      }

      if (circleBottomLeft) {
        gsap.to(circleBottomLeft, {
          duration: 0.5,
          scale: 0,
          ease: "power3.inOut",
          onComplete: () => {
            card.removeChild(circleBottomLeft);
          },
        });
      }

      if (circleTopMiddle) {
        gsap.to(circleTopMiddle, {
          duration: 0.5,
          scale: 0,
          opacity: 0,
          ease: "sine-out",
          onComplete: () => {
            card.removeChild(circleTopMiddle);
          },
        });
      }
    });
  });
}

addHoverAnimations();

export default ProductItem;
