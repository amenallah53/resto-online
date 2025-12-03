import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../../../core/services/cart-service';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css',
  standalone: true,
  imports: [DrawerModule, ButtonModule]
})
export class CartDrawer {
   visible: boolean = false;

   cartService = inject(CartService)
   cart = this.cartService.getCart()
}
