//shoppingcCart.js
class ShoppingCart {
  constructor() {
    this.items = []; //define null array of the shopping cart
  }
  //=====================
  //Add Product
  //=====================
  addProduct(product) {
    // Check if the product is already in the cart
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      //increase its quantity
      existingItem.quantity++;
    } else {
      // if the product is not in the cart, add it with a quantity of 1
      this.items.push({ product, quantity: 1 });
    }
    this.updateCartQuantityDisplay(); //update the quantity
    this.updateSidePanel(); //update the side panel
  }

  //=====================
  //Remove Product from cart
  //=====================
  removeProduct(productId) {
    const itemIndex = this.items.findIndex(
      (item) => item.product.id === productId
    );
    if (itemIndex !== -1) {
      // Remove the item from the cart
      this.items.splice(itemIndex, 1);
    }
    this.updateCartQuantityDisplay(); //update the quantity
    this.updateSidePanel(); //update the side panel
  }

  //===================================================
  //Decrease the quantity of the  Product at the cart
  //===================================================
  decreaseProductQuantity(productId) {
    const existingItem = this.items.find(
      (item) => item.product.id === productId
    );

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // If the quantity is greater than 1, decrement it
        existingItem.quantity--;
      } else {
        // If the quantity is 1, remove the item from the cart --call removeProduct method--
        this.removeProduct(productId);
      }
    }

    this.updateCartQuantityDisplay(); //update the quantity
    this.updateSidePanel(); //update the side panel
  }

  //=================================================================
  //Update the quantity display in the red circle near the cart icon
  //=================================================================
  updateCartQuantityDisplay() {
    const cartQuantityElement = document.getElementById("cart-quantity-1");
    const cartQuantityElement2 = document.getElementById("cart-quantity-2");
    const totalQuantity = this.getTotalQuantity();
    cartQuantityElement.textContent = totalQuantity.toString();
    cartQuantityElement2.textContent = totalQuantity.toString();
    this.animateCart();
  }

  //====================
  // Animate Cart Icon
  //====================
  animateCart() {
    const sidePanelCartIcon = document.querySelector("#side-panel-cart-icon");
    const tl = gsap.timeline();
    tl.to(sidePanelCartIcon, { x: 20, opacity: 0.5, duration: 0.5 });
    tl.to(sidePanelCartIcon, { x: 0, opacity: 1, duration: 0.5 });
  }
  //====================
  // Get the total quantity of items in the cart
  //====================
  getTotalQuantity() {
    return this.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  //==============================
  // Update the side panel content
  //==============================
  updateSidePanel() {
    const sidePanelContent = document.querySelector(".side-panel-content");
    sidePanelContent.innerHTML = "";
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
        }">X</button>
      `;
      sidePanelContent.appendChild(itemElement);

      //=====================================
      // Define the buttons inside side panel
      //=====================================
      const addButton = itemElement.querySelector(".add-item");
      const removeButton = itemElement.querySelector(".remove-item");
      const removeFromCartButton =
        itemElement.querySelector(".remove-from-cart");

      // Add event listeners to the buttons
      addButton.addEventListener("click", () => {
        this.addProduct(product);
      });

      removeButton.addEventListener("click", () => {
        this.decreaseProductQuantity(product.id);
      });

      removeFromCartButton.addEventListener("click", () => {
        this.removeProduct(product.id);
      });
    });

    //=====================================
    // Update the total price
    //=====================================
    const totalPriceElement = document.createElement("div");
    totalPriceElement.classList.add("side-panel-total");
    totalPriceElement.textContent = `Total: $${this.getTotal().toFixed(2)}`;
    sidePanelContent.appendChild(totalPriceElement);

    // Show the side panel (display is none for defualt)
    const sidePanel = document.querySelector(".side-panel");
    const sidePanelContent2 = document.querySelector(".side-panel-content");
    sidePanel.style.height = "auto";
    sidePanelContent2.style.display = "block";
  }
  //=========================================
  // Get the total price of items in the cart
  //=========================================
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
  render() {}
}

// Add a click event listener to the sidePanel element
const sidePanel = document.querySelector(".side-panel");
const sidePanelContent = document.querySelector(".side-panel-content");
sidePanel.addEventListener("click", () => {
  sidePanel.style.height = "auto";
  sidePanelContent.style.display = "block";
  sidePanelContent.style.maxHeight = "400px";

  // Change all side-panel-item elements their display to grid
  const sidePanelItems = document.querySelectorAll(".side-panel-item");
  sidePanelItems.forEach((item) => {
    item.style.display = "grid";
  });
});

//sticky cart section
const stickyOffset = 100;
window.addEventListener("scroll", () => {
  if (window.scrollY >= stickyOffset) {
    sidePanel.classList.add("sticky");
  } else {
    sidePanel.classList.remove("sticky");
  }
});

export default ShoppingCart;
