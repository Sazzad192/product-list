import { makeAutoObservable } from "mobx";

class CartStore {
  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(item) {
    const existingItem = this.cart.find((product) => product.id === item.id);
    if (!existingItem) {
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  incrementQuantity(itemId) {
    const cartItem = this.cart.find((product) => product.id === itemId);
    if (cartItem) {
      cartItem.quantity += 1;
    }
  }

  decrementQuantity(itemId) {
    const cartItem = this.cart.find((product) => product.id === itemId);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      this.removeFromCart(itemId); // Remove the item if quantity reaches 0
    }
  }

  removeFromCart(itemId) {
    this.cart = this.cart.filter((product) => product.id !== itemId);
  }

  isInCart(itemId) {
    return this.cart.some((product) => product.id === itemId);
  }

  get cartCount() {
    return this.cart.length;
  }
}

const cartStore = new CartStore();
export default cartStore;
