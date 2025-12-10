import { Component } from '@angular/core';
import { FoodCard } from '../../cards/food-card/food-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-foods-grid',
  imports: [FoodCard, CommonModule],
  templateUrl: './foods-grid.html',
  styleUrl: './foods-grid.css',
})
export class FoodsGrid {
  
}
