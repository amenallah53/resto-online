import { Component } from '@angular/core';
import { Food } from '../../../models/food';
import { foods } from '../../../utils/foods';
import { NgClass, NgFor } from '@angular/common';
import { FoodCard } from '../../cards/food-card/food-card';

import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  standalone: true,
  selector: 'app-find-your-foods-section',
  imports: [
    NgFor,
    NgClass,
    FoodCard,
    CarouselModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    MenuModule
  ],
  templateUrl: './find-your-foods-section.html',
  styleUrls: ['./find-your-foods-section.css'],
})
export class FindYourFoodsSection {
  responsiveOptions: any[] = [];

  featuredFoods: Food[] = foods.slice(0, 4);

  filteredFood: Food[] = this.featuredFoods; // NORMAL ARRAY, NO SIGNAL


  searchQuery: string = '';

  categories = ['All', 'Pizza', 'Burger', 'Salad', 'Pasta', 'Dessert'];
  selectedCategory: string = 'All';

  filterByCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredFood = this.featuredFoods; // reset
      return;
    }

    this.filteredFood = this.featuredFoods
      .filter(f => f.category.toLowerCase() === category.toLowerCase());
  }

  searchFoods() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredFood = foods
      .filter(f => f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query));
  } 

  ngOnInit() {
    this.filteredFood = this.featuredFoods;

    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 4, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 4, numScroll: 1 },
      { breakpoint: '767px', numVisible: 2, numScroll: 1 },
      { breakpoint: '575px', numVisible: 1, numScroll: 1 }
    ];
  }
}
