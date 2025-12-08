import { Component } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { CARTS } from '../../shared/utils/carts';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-orders-tab',
  imports: [
    TableModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './orders-tab.html',
  styleUrl: './orders-tab.css',
})


export class OrdersTab {
  carts = CARTS;
  cols!: Column[];

  visible = false;
  selectedCart: Cart | null = null;

  editData = {
    userId: '',
    items: [{foodId:'',quantities:[1], price: 12.99}],
  };

  ngOnInit() {
    this.cols = [
      { field: 'userId', header: 'userId' },
      { field: 'items', header: 'items' },
    ];
  }

  openEditDialog(cart: Cart) {
    this.selectedCart = cart;
    this.visible = true;

    this.editData = {
      userId: cart.userId,
      items: cart.items,
    };
  }

  saveChanges() {
    if (!this.selectedCart) return;

    this.carts = this.carts.map((u) =>
      u.id === this.selectedCart!.id
        ? {
            ...u,
            userId: this.editData.userId,
            email: this.editData.items,
          }
        : u
    );

    this.selectedCart.updatedAt=new Date(); 

    this.visible = false;
    this.selectedCart = null;
  }

  deleteUser(id: string) {
    this.carts = this.carts.filter((u) => u.id !== id);
  }
}
