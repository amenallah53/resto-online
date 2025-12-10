import { Injectable, signal } from '@angular/core';
import { credentials } from '../../shared/models/credentials';
import { USERS } from '../../shared/utils/users';
import { User } from '../../shared/models/user';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
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

  // Store user credentials separately
  private userCredentials: UserCredentials[] = [
    { email: "john@example.com", password: "user123", role: UserRole.USER },
    { email: "jane@example.com", password: "user456", role: UserRole.USER },
    { email: "mike@domain.com", password: "user789", role: UserRole.USER },
  ];

  // logged-in state
  private _loggedIn = signal(false);
  public isLoggedIn = this._loggedIn.asReadonly();

  // current user state
  private _currentUser = signal<AuthenticatedUser | null>(null);
  public currentUser = this._currentUser.asReadonly();

  login(credentials: credentials): boolean {
    // Check if admin
    if (
      credentials.email === this.adminEmail &&
      credentials.password === this.adminPassword
    ) {
      this._loggedIn.set(true);
      this._currentUser.set({
        email: credentials.email,
        role: UserRole.ADMIN
      });
      this.isLoggedIn = this._loggedIn.asReadonly();
      return true;
    }

    // Check if regular user
    const userCred = this.userCredentials.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (userCred) {
      this._loggedIn.set(true);
      this._currentUser.set({
        email: userCred.email,
        role: userCred.role
      });
      this.isLoggedIn = this._loggedIn.asReadonly();
      return true;
    }

    // Login failed
    this._loggedIn.set(false);
    this.isLoggedIn = this._loggedIn.asReadonly();
    this._currentUser.set(null);
    this.currentUser = this._currentUser.asReadonly();
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

    return { success: true, message: 'Account created successfully' };
  }

  logout() {
    this._loggedIn.set(false);
    this.isLoggedIn = this._loggedIn.asReadonly();
    this._currentUser.set(null);
    this.currentUser = this._currentUser.asReadonly();
  }

  isAdmin(): boolean {
    return this.currentUser()?.role === UserRole.ADMIN;
  }

  isUser(): boolean {
    return this.currentUser()?.role === UserRole.USER;
  }

  getAllUsers(): User[] {
    return USERS;
  }
}