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
    items: [{ foodId: '', quantities: [1], price: 0 }],
  };

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Cart ID' },
      { field: 'userId', header: 'User ID' },
      { field: 'items', header: 'Items' },
      { field: 'totalPrice', header: 'Total Price' },
    ];
  }

  openEditDialog(cart: Cart) {
    this.selectedCart = cart;
    this.visible = true;

    // Deep clone items so we don’t mutate original
    this.editData = {
      userId: cart.userId,
      items: cart.items.map(i => ({ ...i })),
    };
  }

  saveChanges() {
    if (!this.selectedCart) return;

    this.carts = this.carts.map(c =>
      c.id === this.selectedCart!.id
        ? {
            ...c,
            userId: this.editData.userId,
            items: this.editData.items.map(i => ({ ...i })),
            updatedAt: new Date(),
          }
        : c
    );

    this.visible = false;
    this.selectedCart = null;
  }

  deleteCart(id: string) {
    this.carts = this.carts.filter(c => c.id !== id);
  }

  calcCartTotal(items: { price: number }[]) {
    return items.reduce((sum, i) => sum + i.price, 0);
  }

  calcItemQuantity(quantities: number[]) {
    return quantities.reduce((a, b) => a + b, 0);
  }

  // Update a quantity of an item in the edit dialog
  updateQuantity(item: any, index: number, value: number) {
    item.quantities[index] = value;
  }
}

