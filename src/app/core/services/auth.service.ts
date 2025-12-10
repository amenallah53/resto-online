import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private adminEmail = "admin@gmail.com";
  private adminPassword = "admin@man_u!123";

  // logged-in state
  private _loggedIn = signal(false);
  public isLoggedIn = this._loggedIn.asReadonly();

  constructor() {}

  login(credentials: { email: string; password: string }): boolean {
    if (
      credentials.email === this.adminEmail &&
      credentials.password === this.adminPassword
    ) {
      this._loggedIn.set(true);
      return true;
    }

    this._loggedIn.set(false);
    return false;
  }

  logout() {
    this._loggedIn.set(false);
  }
}
