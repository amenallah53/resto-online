import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    MessageModule,
  ],
  providers: [MessageService],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  credentialsData = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const ok = this.auth.login({ email: this.credentialsData.email, password: this.credentialsData.password });

    if (ok) {
      if (this.auth.isAdmin()) this.router.navigate(['/admin']);
      else this.router.navigate(['/']); // normal user
      form.reset();
      return;
    }

    alert('WRONG CREDENTIALS');
    form.reset();
  }

}
