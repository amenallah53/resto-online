import { Reservation } from "../models/reservation";

export const RESERVATIONS: Reservation[] = [
  {
    id: 'r1',
    userId: 'u1',
    tableNumber: 2,
    reservationTime: new Date('2025-02-14T19:00:00'),
    numberOfGuests: 2
  },
  {
    id: 'r2',
    userId: 'u3',
    tableNumber: 5,
    reservationTime: new Date('2025-02-20T20:30:00'),
    numberOfGuests: 4
  },
  {
    id: 'r3',
    userId: 'u2',
    tableNumber: 1,
    reservationTime: new Date('2025-03-01T18:00:00'),
    numberOfGuests: 1
  }
];
