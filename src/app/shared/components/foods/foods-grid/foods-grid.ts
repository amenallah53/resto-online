import { Component } from '@angular/core';
import { FoodCard } from '../../cards/food-card/food-card';
import { CommonModule } from '@angular/common';
import { foods } from '../../../utils/foods';
import { Food } from '../../../models/food';
@Component({
  selector: 'app-foods-grid',
  imports: [FoodCard, CommonModule],
  templateUrl: './foods-grid.html',
  styleUrl: './foods-grid.css',
})
export class FoodsGrid {
  foodsList: Food[] = foods;
  filteredFood: Food[] = this.foodsList; // NORMAL ARRAY, NO SIGNAL

  categories = ['All', 'Pizza', 'Burger', 'Salad', 'Pasta', 'Dessert'];

  searchQuery: string = '';

  selectedCategory: string = 'All';

  filterByCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredFood = this.foodsList; // reset
      return;
    }

    this.filteredFood = this.foodsList.filter(f => f.category.toLowerCase() === category.toLowerCase());
  }

  searchFoods() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredFood = foods
      .filter(f => f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query));
  } 

  ngOnInit() {
    this.filteredFood = foods;
    console.log(this.filteredFood);
  }
}
