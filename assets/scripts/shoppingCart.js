import Product from "./product.js";

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add a product to the cart
  addProduct(product) {
    // Check if the product is already in the cart
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      // If the product is already in the cart, increase its quantity
      existingItem.quantity++;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      this.items.push({ product, quantity: 1 });
    }
    this.updateCartQuantityDisplay();
    this.updateSidePanel();
  }

  // Method to remove a product from the cart (you can implement this if needed)
  removeProduct(productId) {
    const itemIndex = this.items.findIndex(
      (item) => item.product.id === productId
    );
    if (itemIndex !== -1) {
      // Remove the item from the cart
      this.items.splice(itemIndex, 1);
    }
    this.updateCartQuantityDisplay();
  }
  updateCartQuantityDisplay() {
    const cartQuantityElement = document.getElementById("cart-quantity-1");
    const cartQuantityElement2 = document.getElementById("cart-quantity-2");
    const totalQuantity = this.getTotalQuantity();
    cartQuantityElement.textContent = totalQuantity.toString();
    cartQuantityElement2.textContent = totalQuantity.toString();
    this.animateCart();
  }
  animateCart() {
    const sidePanelCart = document.querySelector(".side-panel-cart");
    const sidePanelCartIcon = document.querySelector("#side-panel-cart-icon");

    const tl = gsap.timeline();
    tl.to(sidePanelCartIcon, { x: 20, opacity: 0.5, duration: 0.5 });
    tl.to(sidePanelCartIcon, { x: 0, opacity: 1, duration: 0.5 });
  }

  // Method to get the total quantity of items in the cart
  getTotalQuantity() {
    return this.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }
  updateSidePanel() {
    const sidePanelContent = document.querySelector(".side-panel-content");
    sidePanelContent.innerHTML = ""; // Clear previous content
    console.log(this.items);
    this.items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("side-panel-item");

      const product = item.product;

      itemElement.innerHTML = `
        <img class="side-panel-item-image" src="${product.image}" alt="${
        product.title
      }" />
        <div class="side-panel-item-details">
          <p class="side-panel-item-title">${product.title}</p>
          <p class="side-panel-item-price">$${product.price.toFixed(2)}</p>
          <div class="side-panel-item-quantity">
            <button class="remove-item" data-product-id="${
              product.id
            }">-</button>
            <p class="item-quantity">${item.quantity}</p>
            <button class="add-item" data-product-id="${product.id}">+</button>
          </div>
        </div>
        <button class="remove-from-cart" data-product-id="${
          product.id
        }">Remove</button>
      `;

      sidePanelContent.appendChild(itemElement);

      // add and remove buttons
      const addButton = itemElement.querySelector(".add-item");
      const removeButton = itemElement.querySelector(".remove-item");
      const removeFromCartButton =
        itemElement.querySelector(".remove-from-cart");

      addButton.addEventListener("click", () => {
        this.addProduct(product);
        this.updateSidePanel();
      });

      removeButton.addEventListener("click", () => {
        this.removeProduct(product.id);
        this.updateSidePanel();
      });

      removeFromCartButton.addEventListener("click", () => {
        this.removeProduct(product.id);
        this.updateSidePanel();
      });
    });

    // Update the total price
    const totalPriceElement = document.createElement("div");
    totalPriceElement.classList.add("side-panel-total");
    totalPriceElement.textContent = `Total: $${this.getTotal().toFixed(2)}`;
    sidePanelContent.appendChild(totalPriceElement);

    // Show the side panel
    const sidePanel = document.querySelector(".side-panel");
    const sidePanelContent2 = document.querySelector(".side-panel-content");
    sidePanel.style.height = "auto";
    sidePanelContent2.style.display = "block";
  }
  // updateSidePanel() {
  //   const sidePanelContent = document.querySelector(".side-panel-content");
  //   sidePanelContent.innerHTML = ""; // Clear previous content

  //   this.items.forEach((item) => {
  //     const itemElement = document.createElement("div");
  //     itemElement.classList.add("side-panel-item");

  //     const product = item.product;

  //     itemElement.innerHTML = `
  //         <img class="side-panel-item-image" src="${product.image}" alt="${
  //       product.title
  //     }" />
  //         <div class="side-panel-item-details">
  //           <p class="side-panel-item-title">${product.title}</p>
  //           <p class="side-panel-item-price">$${product.price.toFixed(2)}</p>
  //           <div class="side-panel-item-quantity">
  //             <button class="remove-item" data-product-id="${
  //               product.id
  //             }">-</button>
  //             <p class="item-quantity">${item.quantity}</p>
  //             <button class="add-item" data-product-id="${
  //               product.id
  //             }">+</button>
  //           </div>
  //         </div>
  //         <button class="remove-from-cart" data-product-id="${
  //           product.id
  //         }">Remove</button>
  //       `;

  //     sidePanelContent.appendChild(itemElement);

  //     // add and remove buttons
  //     const addButton = itemElement.querySelector(".add-item");
  //     const removeButton = itemElement.querySelector(".remove-item");
  //     const removeFromCartButton =
  //       itemElement.querySelector(".remove-from-cart");

  //     addButton.addEventListener("click", () => {
  //       this.addItem(product);
  //       this.updateSidePanel();
  //     });

  //     removeButton.addEventListener("click", () => {
  //       this.removeItem(product);
  //       this.updateSidePanel();
  //     });

  //     removeFromCartButton.addEventListener("click", () => {
  //       this.removeProduct(product.id);
  //       this.updateSidePanel();
  //     });
  //   });
  // }

  // Method to get the total price of items in the cart
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
  render() {}

  // initSidePanelContent() {
  //   const sidePanelContent = document.querySelector(".side-panel-content");
  //   sidePanelContent.innerHTML = ""; // Clear previous content

  //   this.items.forEach((item) => {
  //     const itemElement = document.createElement("div");
  //     itemElement.classList.add("side-panel-item");

  //     const product = item.product;
  //     console.log(`${product}`);
  //     itemElement.innerHTML = `
  //       <img class="side-panel-item-image" src="${product.image}" alt="${
  //       product.title
  //     }" />
  //       <div class="side-panel-item-details">
  //         <p class="side-panel-item-title">${product.title}</p>
  //         <p class="side-panel-item-price">$${product.price.toFixed(2)}</p>
  //         <div class="side-panel-item-quantity">
  //           <button class="remove-item" data-product-id="${
  //             product.id
  //           }">-</button>
  //           <p class="item-quantity">${item.quantity}</p>
  //           <button class="add-item" data-product-id="${product.id}">+</button>
  //         </div>
  //       </div>
  //       <button class="remove-from-cart" data-product-id="${
  //         product.id
  //       }">Remove</button>
  //     `;
  //     sidePanelContent.appendChild(itemElement);

  //     const addButton = itemElement.querySelector(".add-item");
  //     addButton.addEventListener("click", () => {
  //       this.addProduct(product); // Call the method to add a product
  //       this.initSidePanelContent(); // Reinitialize the side panel content
  //     });
  //     const removeButton = itemElement.querySelector(".remove-item");
  //     removeButton.addEventListener("click", () => {
  //       this.removeProduct(product.id); // Call the method to remove a product
  //       this.initSidePanelContent(); // Reinitialize the side panel content
  //     });
  //     const removeFromCartButton =
  //       itemElement.querySelector(".remove-from-cart");
  //     removeFromCartButton.addEventListener("click", () => {
  //       this.removeProduct(product.id); // Call the method to remove a product
  //       this.initSidePanelContent(); // Reinitialize the side panel content
  //     });
  //   });

  //   // Update the total price
  //   const totalPriceElement = document.createElement("div");
  //   totalPriceElement.classList.add("side-panel-total");
  //   totalPriceElement.textContent = `Total: $${this.getTotal().toFixed(2)}`;
  //   sidePanelContent.appendChild(totalPriceElement);
  // }
}

const shoppingCart = new ShoppingCart();
const sidePanel = document.querySelector(".side-panel");
const sidePanelContent = document.querySelector(".side-panel-content");
const stickyOffset = 100;

// Initialize side panel content when the page loads
// shoppingCart.initSidePanelContent();

// Add a click event listener to the sidePanel element
sidePanel.addEventListener("click", () => {
  shoppingCart.updateSidePanel();
  // shoppingCart.initSidePanelContent();

  sidePanel.style.height = "auto";
  sidePanelContent.style.display = "block";
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= stickyOffset) {
    sidePanel.classList.add("sticky");
  } else {
    sidePanel.classList.remove("sticky");
  }
});

export default ShoppingCart;
