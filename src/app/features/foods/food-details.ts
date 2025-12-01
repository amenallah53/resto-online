import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { foods } from '../../shared/utils/foods';
import { Food } from '../../shared/models/food';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-food-details',
  standalone: true,
  templateUrl: './food-details.html',
  styleUrls: ['./foods.css'],
  imports: [CommonModule, NgIf, GalleriaModule, ButtonModule],
})
export class FoodDetails {
  food?: Food;

  constructor(private route: ActivatedRoute) {}

  responsiveOptions: any[] = [
      {
          breakpoint: '1300px',
          numVisible: 4
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('foodId');
    if (!id) return;

    this.food = foods.find(f => f.id === id);
    console.log(this.food);
  }
}
