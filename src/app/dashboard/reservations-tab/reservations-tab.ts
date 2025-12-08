import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../shared/models/reservation';
import { RESERVATIONS } from '../../shared/utils/reservations';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-reservations-tab',
  imports: [
    TableModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './reservations-tab.html',
  styleUrl: './reservations-tab.css',
})
export class ReservationsTab {
  reservationss = RESERVATIONS;
  cols!: Column[];
  
  visible = false;
  selectedReservation: Reservation | null = null;

  editData = {
      userId: '',
      tableNumber: 0,
      reservationTime: new Date('2025-02-14T19:00:00'),
      numberOfGuests: 0,
    };
  
    ngOnInit() {
      this.cols = [
        { field: 'id', header: 'id' },
        { field: 'userId', header: 'userId' },
        { field: 'tableNumber', header: 'tableNumber' },
        { field: 'reservationTime', header: 'reservationTime' },
        { field: 'numberOfGuests', header: 'numberOfGuests' },
      ];
    }
  
    openEditDialog(reserv: Reservation) {
      this.selectedReservation = reserv;
      this.visible = true;
  
      this.editData = {
        userId: reserv.userId,
        tableNumber: reserv.tableNumber,
        reservationTime: reserv.reservationTime || '',
        numberOfGuests: reserv.numberOfGuests || 0,
      };
    }

    saveChanges() {
    if (!this.selectedReservation) return;

    this.reservationss = this.reservationss.map((u) =>
      u.id === this.selectedReservation!.id
        ? {
            ...u,
            userId: this.editData.userId,
            tableNumber: this.editData.tableNumber,
            reservationTime: this.editData.reservationTime,
            numberOfGuests: this.editData.numberOfGuests,
          }
        : u
    );
    this.visible = false;
    this.selectedReservation = null;
    }

  deleteUser(id: string) {
    this.reservationss = this.reservationss.filter((u) => u.id !== id);
  }
}