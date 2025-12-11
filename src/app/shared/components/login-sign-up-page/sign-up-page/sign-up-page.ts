import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    MessageModule,
  ],
  providers: [MessageService],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  switchToLogin = output();

  signUpData = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };
 
  constructor(
  private auth: AuthService,
  private messageService: MessageService,
  private router: Router
) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const result = this.auth.signUp(this.signUpData);
      
      if (result.success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Account created successfully! You can now login.'
        });
        form.reset();
        setTimeout(() => {
          this.switchToLogin.emit();
        }, 1500);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: result.message
        });
      }
    }
  }
}