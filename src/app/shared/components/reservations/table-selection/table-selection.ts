import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TABLES } from '../../../utils/tables';
import { Table } from '../../../models/table';
import { findMaxCapacity } from '../../../utils/tables';
import { find } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { Reservation } from '../../../models/reservation';
import { RESERVATIONS } from '../../../utils/reservations';
import { ReservationHeroSection } from '../reservation-hero-section/reservation-hero-section';

@Component({
  selector: 'app-table-selection',
  imports: [FormsModule,CommonModule, ButtonModule, ReservationHeroSection],
  templateUrl: './table-selection.html',
  styleUrls: ['./table-selection.css']
})
export class TableSelection {
  reservationDate: Date = new Date();
  reservationTime: string = "12-00-00";
  numberOfPeople: number=0;

  dateError: string = '';
  timeError: string = '';
  peopleError: string = '';
  acceptableDate=false;
  acceptableTime=false;
  acceptablePeople=false;
  acceptableAll=false;
  checkTime(){
    const hour = parseInt(this.reservationTime.substring(0, 2), 10);
    if (hour<8 && hour>1){
      this.timeError='The restaurant is closed between 1AM and 8AM';
      this.acceptableTime=false;
    } else {
      this.timeError='';
      this.acceptableTime=true;
    }
  }

  checkDate(){
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for comparison
    if (this.reservationDate < today) {
      this.dateError = 'The reservation date cannot be in the past.';
      this.acceptableDate=false;
    } else {
      this.dateError = '';
      this.acceptableDate=true;
    }
  }

  checkPeople() {
    if (this.numberOfPeople <= 0) {
      this.peopleError = 'The number of people must be greater than 0.';
      this.acceptablePeople = false;
    } else if (this.numberOfPeople > findMaxCapacity(TABLES)) {
      this.peopleError = 'The number of people cannot exceed '+ findMaxCapacity(TABLES).toString();
      this.acceptablePeople = false;
    } else {
      this.peopleError = '';
      this.acceptablePeople = true;
    }
  }

  checkAll(){
    this.checkDate();
    this.checkTime();
    this.checkPeople();
    this.acceptableAll=this.acceptableDate && this.acceptableTime && this.acceptablePeople;

  }

  saveReservation() {
    if (this.acceptableAll && this.numberOfPeople > 0) {
      const reservationId = `r${RESERVATIONS.length + 1}`;
      const reservation: Reservation = {
        id: reservationId,
        userId: 'u1',
        reservationTime: this.parseReservationDateTime(),
        numberOfGuests: this.numberOfPeople,
        tableNumber: this.findAvailableTable().tableID
      };
      RESERVATIONS.push(reservation);
    }
    console.log("mwah");

    this.reservationDate = new Date();
    this.reservationTime = "12-00-00";
    this.numberOfPeople = 0;
    this.dateError = '';
    this.timeError = '';
    this.peopleError = '';
    this.acceptableDate = false;
    this.acceptableTime = false;
    this.acceptablePeople = false;
    this.acceptableAll = false;
  }

  private parseReservationDateTime(): Date {
    const [hours, minutes, seconds] = this.reservationTime.split('-').map(Number);
    const dateTime = new Date(this.reservationDate);
    dateTime.setHours(hours, minutes, seconds, 0);
    return dateTime;
  }

  private findAvailableTable(): Table {
    const reservationDateTime = this.parseReservationDateTime();
    const reservationEndTime = new Date(reservationDateTime.getTime() + 60 * 60 * 1000);
    
    return TABLES.filter(table => 
      table.capacity >= this.numberOfPeople &&
      !RESERVATIONS.some(reservation => 
      reservation.tableNumber === table.tableID &&
      reservation.reservationTime < reservationEndTime &&
      new Date(reservation.reservationTime.getTime() + 60 * 60 * 1000) > reservationDateTime
      )
    )[0];
  }
}
