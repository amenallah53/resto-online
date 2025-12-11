import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {

  constructor(private auth: UserAuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login-page']); // redirect to normal login page
      return false;
    }
    return true;
  }
}
