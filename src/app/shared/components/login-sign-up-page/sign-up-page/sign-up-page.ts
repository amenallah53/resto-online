import { Component, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';

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
  auth: any;
  messageService: any;

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
