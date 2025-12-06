import { Cart } from "../models/cart";

export const CARTS: Cart[] = [
  {
    id: 'c1',
    userId: 'u1',
    items: [
      { foodId: 'f1', quantities: [1], price: 12.99 },
      { foodId: 'f2', quantities: [2], price: 7.50 }
    ],
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-04-02')
  },
  {
    id: 'c2',
    userId: 'u2',
    items: [
      { foodId: 'f3', quantities: [1], price: 15.00 }
    ],
    createdAt: new Date('2024-04-10')
  }
];
