import { Injectable } from "@angular/core";
import { Cart } from "../../app/shared/models/cart";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'resto-cart';

  private cartSubject = new BehaviorSubject<Cart>(this.getCartFromStorage() || this.createEmptyCart());
  cart$ = this.cartSubject.asObservable(); // Observable to subscribe to in components

  constructor() {}

  private getCartFromStorage(): Cart | null {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(this.cartKey);
    return data ? JSON.parse(data) : null;
  }

  saveCart() {
    if (typeof window === 'undefined') return;
    const cart = this.cartSubject.value;
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  private createEmptyCart(): Cart {
    return { id: crypto.randomUUID(), userId: 'guest', items: [] };
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  addItem(foodId: string, quantities: number[], price: number) {
    const cart = this.cartSubject.value;
    const existing = cart.items.find(i => i.foodId === foodId);

    if (existing) {
      for (let i = 0; i < quantities.length; i++) {
        existing.quantities[i] += quantities[i];
      }
      existing.price += price;
    } else {
      cart.items.push({ foodId, quantities: [...quantities], price });
    }

    this.cartSubject.next(cart); // update observable
    this.saveCart();
  }

  removeItem(foodId: string) {
    const cart = this.cartSubject.value;
    cart.items = cart.items.filter(i => i.foodId !== foodId);
    this.cartSubject.next(cart);
    this.saveCart();
  }

  clearCart() {
    const newCart = this.createEmptyCart();
    this.cartSubject.next(newCart);
    this.saveCart();
  }
}
