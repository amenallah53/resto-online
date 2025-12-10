import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    MessageModule,
  ],
  providers: [MessageService],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
 switchToSignUp = output();

  credentialsData = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService, 
    private router: Router,
    private messageService: MessageService
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const ok = this.auth.login({ 
        email: this.credentialsData.email, 
        password: this.credentialsData.password 
      });
      
      if (ok) {
        if (this.auth.isAdmin()) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful!'
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Wrong credentials'
        });
      }
      form.reset();
    }
  }
}
