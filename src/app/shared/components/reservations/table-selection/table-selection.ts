import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-selection',
  imports: [FormsModule,CommonModule],
  templateUrl: './table-selection.html',
  styleUrls: ['./table-selection.css'],
})
export class TableSelection {

  tables=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
  reservationDate: string = '';
  reservationTime: string = '';

  dateError: string = '';
  timeError: string = '';

  validateDateTime() {
    this.dateError = '';
    this.timeError = '';

    const now = new Date();

    // --- DATE VALIDATION ---
    if (this.reservationDate) {
      const selectedDate = new Date(this.reservationDate);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        this.dateError = 'Date cannot be in the past';
      }
    }

    // --- TIME VALIDATION ---
    if (this.reservationTime) {
      const [hours, minutes] = this.reservationTime.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;

      const minMinutes = 8 * 60;  // 08:00
      const maxMinutes = 25 * 60; // 01:00 next day

      // Adjust for times past midnight
      const adjustedMinutes = hours < 8 ? totalMinutes + 24 * 60 : totalMinutes;

      if (adjustedMinutes < minMinutes || adjustedMinutes > maxMinutes || minutes % 30 !== 0) {
        this.timeError = 'Time must be between 08:00 and 01:00 with 30-minute intervals';
      } else if (this.reservationDate) {
        // check if time is in the past for today
        const selectedDateTime = new Date(this.reservationDate);
        selectedDateTime.setHours(hours, minutes, 0, 0);
        if (selectedDateTime < now) {
          this.timeError = 'Time cannot be in the past';
        }
      }
    }
  }
}
