import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { SimpleLayout } from './layouts/simple-layout/simple-layout';

export const routes: Routes = [

  // PUBLIC ROUTES
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'foods', loadComponent: () => import('./features/foods/foods').then(m => m.Foods) },
      { path: 'foods/:foodId', loadComponent: () => import('./features/foods/food-details').then(m => m.FoodDetails) },
      { path: 'cart', loadComponent: () => import('./features/cart/cart').then(m => m.Cart) },
      { path: 'reservations', loadComponent: () => import('./features/reservations/reservations').then(m => m.Reservations) },
    ]
  },

  // ADMIN AREA (login + protected dashboard)
  {
    path: 'admin',
    component: SimpleLayout,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/admin/login/login').then(m => m.Login)
      },
      {
        path: '',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard').then(m => m.Dashboard)
      }
    ]
  },

  { path: '**', redirectTo: '' }
];
