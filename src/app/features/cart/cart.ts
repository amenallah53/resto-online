import { Component, inject } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../../core/services/cart-service';
import { Food } from '../../shared/models/food';
import { foods } from '../../shared/utils/foods';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Form } from '../../shared/components/form/form';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  standalone: true,
  imports: [Form,StepperModule, ButtonModule, CommonModule, FormsModule, InputNumberModule],
  providers: [MessageService]
})

export class Cart {
  cartService = inject(CartService);
  cartFoods: {
    food: Food;
    quantities: number[];
    price: number;
    size: string;
    totalQuantity?: number;
    initialTotalQuantity?: number;
  }[] = [];
  totalPrice? : number;

  constructor(private messageService: MessageService) {}

  onFormSubmitted(activateCallback: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Form Submitted Successfully!',
      life: 3000
    });
    activateCallback(3);
  }

  ngOnInit() {
    this.totalPrice = 0
    this.cartService.cart$.subscribe(cart => {
      this.cartFoods = cart.items
        .map(item => {
          this.totalPrice! += item.price;
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

  recalculateTotalPrice() {
    this.totalPrice = this.cartFoods.reduce((sum, item) => sum + item.price, 0);
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

    this.recalculateTotalPrice()
  }
}