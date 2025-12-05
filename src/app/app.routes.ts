import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
      },
      {
        path: 'foods',
        loadComponent: () => import('./features/foods/foods').then(m => m.Foods)
      },
      {
        path: 'foods/:foodId',
        loadComponent: () => import('./features/foods/food-details').then(m => m.FoodDetails)
      },
      {
        path: 'cart',
        loadComponent: () => import('./features/cart/cart').then(m => m.Cart)
      },
      {
        path: 'reservations',
        loadComponent: () => import('./features/reservations/reservations').then(m => m.Reservations)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];