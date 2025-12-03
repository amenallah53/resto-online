export interface Cart {
    id: string;
    userId: string;
    items: {
        foodId: string;
        quantity: number;
    }[];
    createdAt?: Date;
    updatedAt?: Date;
}