import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SearchBarFoodCard } from '../cards/search-bar-food-card/search-bar-food-card';
import { CommonModule, NgIf } from '@angular/common';
import { foods } from '../../utils/foods';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CartDrawer } from '../cart-drawer/cart-drawer';
import { Food } from '../../models/food';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/auth.service';
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
    CartDrawer,
    NgIf,
    RouterLink
],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  constructor(private auth: AuthService, private router: Router) {}

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  filteredFood: Food[] = [];

  searchQuery: string = '';

  searchFoods() {
    const query = this.searchQuery.toLowerCase().trim();
    if (query === '') this.filteredFood = []
    else {
      this.filteredFood = foods
      .filter(f => f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query));
    }
    
  } 

  foodClicked() {
    this.visible = false
  }

  logout() {
    this.auth.logout();          // clear user session
    this.router.navigate(['/login-page']); // go to login
  }
}
