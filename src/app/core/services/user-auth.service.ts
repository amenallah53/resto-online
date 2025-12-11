import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserAuthService {

  private USER_TOKEN_KEY = 'user_token';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(email: string): void {
    if (!this.isBrowser()) return;
    const fakeToken = 'user-token-' + email + '-' + new Date().getTime();
    localStorage.setItem(this.USER_TOKEN_KEY, fakeToken);
  }

  logout(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(this.USER_TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    if (!this.isBrowser()) return false;
    return !!localStorage.getItem(this.USER_TOKEN_KEY);
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(this.USER_TOKEN_KEY);
  }
}
