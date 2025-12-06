import { Component, Input } from '@angular/core';
import { Food } from '../../../models/food';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar-food-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './search-bar-food-card.html',
  styleUrl: './search-bar-food-card.css',
})
export class SearchBarFoodCard {
  @Input() food!: Food;
}
