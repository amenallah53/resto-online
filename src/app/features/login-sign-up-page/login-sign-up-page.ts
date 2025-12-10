import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../../shared/components/login-sign-up-page/login-page/login-page';
import { SignUpPage } from '../../shared/components/login-sign-up-page/sign-up-page/sign-up-page';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AlreadyLoggedIn } from "../../shared/components/login-sign-up-page/already-logged-in/already-logged-in";

@Component({
  selector: 'app-login-sign-up-page',
  imports: [CommonModule, LoginPage, SignUpPage, ButtonModule, AlreadyLoggedIn],
  standalone: true,
  templateUrl: './login-sign-up-page.html',
})
export class LoginSignUpPage {
  showLogin = signal(true);
  constructor(public authService: AuthService, private router: Router) {}
}