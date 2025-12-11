import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface credentials {
  email: string;
  password: string;
}

export interface AuthenticatedUser {
  email: string;
  role: UserRole;
}

interface UserCredentials {
  email: string;
  password: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private adminEmail = "admin@gmail.com";
  private adminPassword = "admin@man_u!123";

  private userCredentials: UserCredentials[] = [
    { email: "john@example.com", password: "user123", role: UserRole.USER },
    { email: "jane@example.com", password: "user456", role: UserRole.USER },
    { email: "mike@domain.com", password: "user789", role: UserRole.USER },
    { email: "amenkalai53@gmail.com", password: "amen2004", role: UserRole.USER },
    { email: "ghazimouaddeb55@gmail.com", password: "ghazi2004", role: UserRole.USER },
  ];

  private _loggedIn = signal(false);
  public isLoggedIn = this._loggedIn.asReadonly();

  private _currentUser = signal<AuthenticatedUser | null>(null);
  public currentUser = this._currentUser.asReadonly();

  private USER_TOKEN_KEY = 'user_token';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(credentials: credentials): boolean {
    // --- Admin login ---
    if (credentials.email === this.adminEmail && credentials.password === this.adminPassword) {
      this._loggedIn.set(true);
      this._currentUser.set({ email: credentials.email, role: UserRole.ADMIN });
      return true;
    }

    // --- Normal user login ---
    const userCred = this.userCredentials.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (userCred) {
      this._loggedIn.set(true);
      this._currentUser.set({ email: userCred.email, role: UserRole.USER });

      // store token in localStorage
      if (this.isBrowser()) {
        const token = `user-token-${userCred.email}-${new Date().getTime()}`;
        localStorage.setItem(this.USER_TOKEN_KEY, token);
      }

      return true;
    }

    // --- Login failed ---
    this._loggedIn.set(false);
    this._currentUser.set(null);
    if (this.isBrowser()) localStorage.removeItem(this.USER_TOKEN_KEY);
    return false;
  }

  logout() {
    this._loggedIn.set(false);
    this._currentUser.set(null);
    if (this.isBrowser()) localStorage.removeItem(this.USER_TOKEN_KEY);
  }

  isAdmin(): boolean {
    return this.currentUser()?.role === UserRole.ADMIN;
  }

  isUser(): boolean {
    return this.currentUser()?.role === UserRole.USER;
  }

  getUserToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(this.USER_TOKEN_KEY);
  }

  restoreUserFromToken(): boolean {
    if (!this.isBrowser()) return false;
    const token = localStorage.getItem(this.USER_TOKEN_KEY);
    if (!token) return false;

    const email = token.split('-')[2]; // token format: user-token-email-timestamp
    const userCred = this.userCredentials.find(u => u.email === email);
    if (!userCred) return false;

    this._loggedIn.set(true);
    this._currentUser.set({ email: userCred.email, role: UserRole.USER });
    return true;
  }
}
