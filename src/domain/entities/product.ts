import { Entity } from '../core';

export interface Product extends Entity {
  name: string;
  amount: number;
  wholesaleMinAmount: number;
  price: number;
  whosalePrice: number;
  addedAt: Date;
}
