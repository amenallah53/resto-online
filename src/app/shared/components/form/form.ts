import { Component, EventEmitter, Output } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrl: './form.css',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    MessageModule,
  ],
  providers: [MessageService]
})
export class Form {
  messageService = inject(MessageService);

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  };

  @Output() formSubmitted = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form Submitted Successfully!',
        life: 3000
      });

      form.resetForm();
      this.formSubmitted.emit(); // Notify parent
    }
  }

  /*onSubmit(form: any) {
    if (form.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form Submitted Successfully!',
        life: 3000
      });

      form.resetForm();
    }
  }*/
}
