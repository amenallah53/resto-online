import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { UsersTab } from '../../../dashboard/users-tab/users-tab';
import { OrdersTab } from '../../../dashboard/orders-tab/orders-tab';
import { FoodsTab } from '../../../dashboard/foods-tab/foods-tab';
import { ReservationsTab } from '../../../dashboard/reservations-tab/reservations-tab';
import { TablesTab } from '../../../dashboard/tables-tab/tables-tab';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TabsModule, 
  UsersTab, OrdersTab, FoodsTab, ReservationsTab, TablesTab],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}