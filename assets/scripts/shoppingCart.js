import Product from "./product.js"; // Import the Product class if needed

class ShoppingCart {
  constructor() {
    this.items = []; // Initialize an empty array to store cart items
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
  }

  // Method to get the total price of items in the cart
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
  render() {}
}

export default ShoppingCart;
