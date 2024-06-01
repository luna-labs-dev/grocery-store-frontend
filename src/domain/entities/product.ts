import { Entity } from '../core';

export interface Product extends Entity {
  name: string;
  amount: number;
  wholesaleMinAmount: number;
  price: number;
  whosalePrice: number;
  addedAt: Date;
}

export interface AddProductToCartInputParams extends Pick<Product, 'name' | 'amount' | 'price'> {
  wholesaleMinAmount?: number;
  whosalePrice?: number;
}

export interface AddProductToCartParams {
  shoppingEventId: string;
  params: AddProductToCartInputParams;
}

export interface AddProductSuccessResponse extends Pick<Product, 'id' | 'addedAt'> {}
