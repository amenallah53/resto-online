import { Component, inject } from '@angular/core';
import { CartService } from '../../../../core/services/cart-service';
import { Food } from '../../models/food';
import { foods } from '../../utils/foods';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [DrawerModule, ButtonModule, CommonModule, InputNumberModule, FormsModule],
  templateUrl: './cart-drawer.html',
})
export class CartDrawer {
  visible = false;
  cartService = inject(CartService);

  cartFoods: {
    food: Food;
    quantities: number[];
    price: number;
    size: string;
    totalQuantity?: number;
    initialTotalQuantity: number;
  }[] = [];

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cartFoods = cart.items
        .map(item => {
          const food = foods.find(f => f.id === item.foodId);
          if (!food) return null;
          const totalQuantity = item.quantities.reduce((a, b) => a + b, 0);
          return { 
            food, 
            quantities: item.quantities, 
            price: item.price, 
            size: '', 
            totalQuantity, 
            initialTotalQuantity: totalQuantity // store initial total
          };
        })
        .filter(Boolean) as any[];
    });
  }

  calcAllQuantities(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  }

  updateFirstQuantity(newTotal: number, item: { food: Food; quantities: number[]; price: number; totalQuantity?: number }) {
    const currentTotal = item.quantities.reduce((a, b) => a + b, 0);
    const added = newTotal - currentTotal;

    // only update the first index directly
    item.quantities[0] += added;
    item.price += item.food.price * added;
    item.totalQuantity = newTotal;

    // DO NOT call cartService.addItem, we already modified the array directly
    this.cartService.saveCart(); // just save to localStorage
  }

}
