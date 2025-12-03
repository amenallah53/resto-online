import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SearchBarFoodCard } from '../cards/search-bar-food-card/search-bar-food-card';
import { CommonModule } from '@angular/common';
import { foods } from '../../utils/foods';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-header',
  imports: [
    DialogModule,
    ButtonModule,
    SearchBarFoodCard,
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  filteredFood=foods;

  searchQuery: string = '';

   categories = ['All', 'Pizza', 'Burger', 'Salad', 'Pasta', 'Dessert'];
  selectedCategory: string = 'All';

  filterByCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredFood = foods; // reset
      return;
    }

    this.filteredFood = foods
      .filter(f => f.category.toLowerCase() === category.toLowerCase());
  }

  searchFoods() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredFood = foods
      .filter(f => f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query));
  } 
}
