export interface Reservation {
    id: string;
    userId: string;
    tableNumber: number;
    reservationTime: Date;
    numberOfGuests: number;
}