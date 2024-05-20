import { Product } from './product';
import { MarketResponse } from './market';
import { Entity, FetchListParams, FetchListResponse } from '../core';

export interface ShoppingEventCalculatedTotals {
  retailTotal: number;
  wholesaleTotal: number;
  paidValue: number;
  wholesaleSavingValue: number;
  retailPaidDifferenceValue: number;
  wholesalePaidDifferenceValue: number;
}

export type ShoppingEventStatus = 'CANCELED' | 'FINISHED' | 'ONGOING';

export interface ShoppingEvent extends Entity {
  status: ShoppingEventStatus;
  market: MarketResponse;
  calculatedTotals: ShoppingEventCalculatedTotals;
  products: Product[];
  createdAt: Date;
  createdBy: string;
}

type ShoppingEventSortBy = keyof Pick<ShoppingEvent, 'createdAt'>;

export interface FetchShoppingEventListPeriod {
  start: Date;
  end: Date;
}

export interface FetchShoppingEventListParams extends FetchListParams<ShoppingEventSortBy> {
  status?: ShoppingEventStatus;
  period?: FetchShoppingEventListPeriod;
}

export interface ShoppingEventListItem extends Pick<ShoppingEvent, 'id' | 'status' | 'createdAt'> {
  market: string;
  totals: Pick<ShoppingEventCalculatedTotals, 'retailTotal' | 'wholesaleTotal'>;
}

export interface ShoppingEventListResponse extends FetchListResponse<ShoppingEventListItem> {}
