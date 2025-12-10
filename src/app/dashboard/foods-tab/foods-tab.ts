import { Component } from '@angular/core';
import { foods } from '../../shared/utils/foods';
import { Food } from '../../shared/models/food';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foods-tab',
  imports: [
    TableModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './foods-tab.html',
  styleUrl: './foods-tab.css',
})
export class FoodsTab {
  FoodsList = foods;
  cols!: { field: string; header: string }[];
  
  visible = false;
  selectedFood: Food | null = null;
  editData = {
    name: '',
    price: 0,
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
  };
  selectedTable: any;
  allTables: any;

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'price', header: 'price' },
      { field: 'calories', header: 'calories' },
      { field: 'proteins', header: 'proteins' },
      { field: 'fats', header: 'fats' },
    ];
  }

  openEditDialog(food: Food) {
        this.selectedFood = food;
        this.visible = true;
    
        this.editData = {
          name: food.name,
          price: food.price,
          calories: food.calories ?? 0,
          proteins: food.protein ?? 0,
          carbohydrates: food.carbohydrates ?? 0,
          fats: food.fats ?? 0
        };
      }
  deleteFood(id: string) {
    this.FoodsList = this.FoodsList.filter((u) => u.id !== id);
  }

  saveChanges() {
    if (!this.selectedFood) return;

    this.FoodsList = this.FoodsList.map((u) =>
      u.id === this.selectedFood!.id
        ? {
            ...u,
            name: this.editData.name,
            price: this.editData.price,
            calories: this.editData.calories,
            proteins: this.editData.proteins,
            carbohydrates: this.editData.carbohydrates,
            fats: this.editData.fats
          }
        : u
    );

    this.visible = false;
    this.selectedFood = null;
  }

}
