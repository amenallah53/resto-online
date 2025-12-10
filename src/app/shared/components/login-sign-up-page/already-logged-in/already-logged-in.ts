import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-already-logged-in',
  imports: [CommonModule, ButtonModule],
  templateUrl: './already-logged-in.html',
  styleUrl: './already-logged-in.css',
})
export class AlreadyLoggedIn {

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  goToDashboard() {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
