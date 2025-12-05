export interface Cart {
  id: string;
  userId: string;
  items: {
    foodId: string;
    quantities: number[];
    price: number;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}
