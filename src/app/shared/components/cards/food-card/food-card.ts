import { Component, Input } from '@angular/core';
import { Food } from '../../../models/food';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-food-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './food-card.html',
  styleUrls: ['./food-card.css'],
})
export class FoodCard {
  @Input() food!: Food;
}
