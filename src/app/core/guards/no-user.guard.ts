import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({ providedIn: 'root' })
export class NoUserGuard implements CanActivate {

  constructor(private auth: UserAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/']); // redirect to home page
      return false;
    }
    return true;
  }
}
