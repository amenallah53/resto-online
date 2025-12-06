import { Component } from '@angular/core';
import { USERS } from '../../shared/utils/users';
import { User } from '../../shared/models/user';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.html',
  styleUrl: './users-tab.css',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
})
export class UsersTab {
  clients = USERS;
  cols!: Column[];

  visible = false;
  selectedUser: User | null = null;

  editData = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  };

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'username', header: 'username' },
      { field: 'email', header: 'email' },
      { field: 'firstName', header: 'firstName' },
      { field: 'lastName', header: 'lastName' },
    ];
  }

  openEditDialog(user: User) {
    this.selectedUser = user;
    this.visible = true;

    this.editData = {
      username: user.username,
      email: user.email,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
    };
  }

  saveChanges() {
    if (!this.selectedUser) return;

    this.clients = this.clients.map((u) =>
      u.id === this.selectedUser!.id
        ? {
            ...u,
            username: this.editData.username,
            email: this.editData.email,
            firstName: this.editData.firstName,
            lastName: this.editData.lastName,
          }
        : u
    );

    this.visible = false;
    this.selectedUser = null;
  }

  deleteUser(id: string) {
    this.clients = this.clients.filter((u) => u.id !== id);
  }

  get isSaveDisabled() {
    return (
      !this.editData.username.trim() ||
      !this.editData.email.trim() ||
      !this.editData.firstName.trim() ||
      !this.editData.lastName.trim()
    );
  }
}
