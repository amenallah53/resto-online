import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { foods } from '../../shared/utils/foods';
import { Food } from '../../shared/models/food';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { FoodCard } from '../../shared/components/cards/food-card/food-card';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
@Component({ selector: 'app-food-details', standalone: true, templateUrl: './food-details.html', styleUrls: ['./foods.css'], imports: [ CommonModule, NgIf, GalleriaModule, ButtonModule, FoodCard, InputNumberModule, FormsModule ], })

export class FoodDetails {
  food?: Food;
  relatedFood?: Food[];
  quantity: number = 1;
  selectedSize?: { size: string; addedPrice: number } = { size: "", addedPrice: 0 };
  btnsDisabled: boolean = this.selectedSize?.size === "";

  constructor(private route: ActivatedRoute) {}

  cartService = inject(CartService)
  //cart = this.cartService.getCart()

  responsiveOptions: any[] = [
    { breakpoint: '1300px', numVisible: 4 },
    { breakpoint: '575px', numVisible: 1 }
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('foodId');
    if (!id) return;

    this.food = foods.find(f => f.id === id);
    this.relatedFood = foods
      .filter(
        f =>
          f.category.toLowerCase() === this.food?.category.toLowerCase() &&
          f.id !== this.food.id
      )
      .splice(0, 4);
    console.log(this.food);
  }

  toggleSize(size: { size: string; addedPrice: number }): void {
    this.selectedSize = size;
    this.btnsDisabled = this.selectedSize?.size === "";
    console.log("size :", this.selectedSize, this.btnsDisabled);
  }

  get totalPrice(): number {
    if (!this.food) return 0;
    return (this.food.price + (this.selectedSize?.addedPrice || 0)) * this.quantity;
  }

  addItem(quantity: number) {
    const sizesCount = this.food?.servingSize.length ?? 0;
    // Create array of zeros with length = number of sizes
    const quantities = new Array(sizesCount).fill(0);
    const index_size = this.food!.servingSize.indexOf(this.selectedSize!);
    quantities[index_size] = quantity;
    this.cartService.addItem(this.food!.id, quantities, this.totalPrice);
    console.log("total", this.totalPrice);
  }

}
