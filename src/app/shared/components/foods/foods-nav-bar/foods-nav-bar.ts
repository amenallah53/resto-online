import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foods-nav-bar',
  imports: [CommonModule],
  templateUrl: './foods-nav-bar.html',
  styleUrl: './foods-nav-bar.css',
})
export class FoodsNavBar {
  categories = ['All', 'Pizza', 'Burger', 'Salad', 'Pasta', 'Dessert'];
}
