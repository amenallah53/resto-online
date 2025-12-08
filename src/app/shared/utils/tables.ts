import { Table } from "../models/table";

export const TABLES: Table[] = [
  { tableID: 1, capacity: 2, isAvailable: true },
  { tableID: 2, capacity: 4, isAvailable: false },
  { tableID: 3, capacity: 6, isAvailable: true },
  { tableID: 4, capacity: 4, isAvailable: true },
  { tableID: 5, capacity: 8, isAvailable: false }
];

export function findMaxCapacity(tables: Table[]): number {
  return Math.max(...tables.map(table => table.capacity));
}
