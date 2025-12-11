import { Routes } from '@angular/router';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { SimpleLayout } from './layouts/simple-layout/simple-layout';

// Admin guard
import { AuthGuard } from './core/guards/auth.guard';

import { NoUserGuard } from './core/guards/no-user.guard';
import { UserGuard } from './core/guards/user.guard';

export const routes: Routes = [

  // =========================
  // USER-PROTECTED ROUTES
  // =========================
  {
    path: '',
    component: DefaultLayout,
    //canActivate: [UserGuard], // <- protect all children
    children: [
      { path: '', canActivate: [UserGuard], loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'foods', loadComponent: () => import('./features/foods/foods').then(m => m.Foods) },
      { path: 'foods/:foodId', loadComponent: () => import('./features/foods/food-details').then(m => m.FoodDetails) },
      { path: 'cart', loadComponent: () => import('./features/cart/cart').then(m => m.Cart) },
      { path: 'reservations', loadComponent: () => import('./features/reservations/reservations').then(m => m.Reservations) },
    ]
  },

  // =========================
  // LOGIN PAGE (normal users only)
  // =========================
  {
    path: '',
    component: SimpleLayout,
    children: [
      { path: 'login-page', canActivate: [NoUserGuard], loadComponent: () => import('./features/login-sign-up-page/login-sign-up-page').then(m => m.LoginSignUpPage) },
    ]
  },

  // =========================
  // ADMIN AREA
  // =========================
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

  // =========================
  // CATCH ALL
  // =========================
  { path: '**', redirectTo: '' }
];
