import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { USERS } from '../../shared/utils/users';
import { User } from '../../shared/models/user';

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
  private USERS_STORAGE_KEY = 'resto_users';
  private CREDENTIALS_STORAGE_KEY = 'resto_credentials';

  constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router) {}

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

  signUp(userData: {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }): { success: boolean; message: string } {
    // Check if email already exists
    const emailExists = this.userCredentials.some(u => u.email === userData.email);
    if (emailExists) {
      return { success: false, message: 'Email already exists' };
    }

    // Check if username already exists in USERS
    const usernameExists = USERS.some(u => u.username === userData.username);
    if (usernameExists) {
      return { success: false, message: 'Username already taken' };
    }

    // Generate new user ID
    const newUserId = 'u' + (USERS.length + 1);

    // Create new user object
    const newUser: User = {
      id: newUserId,
      username: userData.username,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      createdAt: new Date()
    };

    // Add to USERS array
    USERS.push(newUser);

    // Add credentials
    this.userCredentials.push({
      email: userData.email,
      password: userData.password,
      role: UserRole.USER
    });

    // Save to localStorage
    this.saveUsersToLocalStorage();
    this.saveCredentialsToLocalStorage();

    return { success: true, message: 'Account created successfully' };
  }

  private saveUsersToLocalStorage() {
    if (!this.isBrowser()) return;
    try {
      localStorage.setItem(this.USERS_STORAGE_KEY, JSON.stringify(USERS));
    } catch (error) {
      console.error('Error saving users to localStorage:', error);
    }
  }

  /**
   * Save credentials to localStorage
   */
  private saveCredentialsToLocalStorage() {
    if (!this.isBrowser()) return;
    try {
      localStorage.setItem(this.CREDENTIALS_STORAGE_KEY, JSON.stringify(this.userCredentials));
    } catch (error) {
      console.error('Error saving credentials to localStorage:', error);
    }
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
