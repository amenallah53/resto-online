import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { CommonModule } from '@angular/common';
import { foods } from '../../shared/utils/foods';
import { Food } from '../../shared/models/food';
import { FoodCard } from '../../shared/components/cards/food-card/food-card';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-foods',
  imports: [
    Header,
    FoodCard,
    CommonModule, 
    PaginatorModule
  ],
  templateUrl: './foods.html',
  styleUrl: './foods.css',
})

export class Foods {
  foodsList: Food[] = foods;
  filteredFood: Food[] = this.foodsList;
  paginatedFood: Food[] = [];

  categories = ['All', 'Pizza', 'Burger', 'Salad', 'Pasta', 'Dessert'];
  searchQuery: string = '';
  selectedCategory: string = 'All';

  first: number = 0;
  rows: number = 8;

  filterByCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredFood = this.foodsList;
    } else {
      this.filteredFood = this.foodsList.filter(
        f => f.category.toLowerCase() === category.toLowerCase()
      );
    }

    this.first = 0;
    this.updatePagination();
  }

  searchFoods() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredFood = foods.filter(
      f =>
        f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query)
    );

    this.first = 0;
    this.updatePagination();
  }

  get dynamicTitle(): string {
    return this.selectedCategory === 'All'
      ? 'All foods'
      : `${this.selectedCategory} foods`;
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 8;
    this.updatePagination();
  }

  updatePagination() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedFood = this.filteredFood.slice(start, end);
  }

  ngOnInit() {
    this.filteredFood = foods;
    this.updatePagination();
  }
}

