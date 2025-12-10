import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TempCartService {
  private cart: { items: { foodId: string; quantities: number[]; price: number }[] } | null = null;

  setCart(cart: { items: { foodId: string; quantities: number[]; price: number }[] }) {
    this.cart = cart;
  }

  getCart() {
    const cart = this.cart;
    this.cart = null; // clear after reading if you want
    return cart;
  }
}
