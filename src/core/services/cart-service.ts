import { Injectable } from "@angular/core";
import { Cart } from "../../app/shared/models/cart";

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'resto-cart';
  private cart: Cart;

  constructor() {
    this.cart = this.getCartFromStorage() || this.createEmptyCart();
  }

  private getCartFromStorage(): Cart | null {
    if (typeof window === 'undefined') return null; // <-- SSR guard
    const data = localStorage.getItem(this.cartKey);
    return data ? JSON.parse(data) : null;
    }

    private saveCart() {
    if (typeof window === 'undefined') return; // <-- SSR guard
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    }


  private createEmptyCart(): Cart {
    return {
      id: crypto.randomUUID(),
      userId: 'guest',
      items: []
    };
  }

  addItem(foodId: string, quantity: number = 1) {
    const existing = this.cart.items.find(i => i.foodId === foodId);

    if (existing) existing.quantity += quantity;
    else this.cart.items.push({ foodId, quantity });

    this.saveCart();
  }

  removeItem(foodId: string) {
    this.cart.items = this.cart.items.filter(i => i.foodId !== foodId);
    this.saveCart();
  }

  clearCart() {
    this.cart = this.createEmptyCart();
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }
}
