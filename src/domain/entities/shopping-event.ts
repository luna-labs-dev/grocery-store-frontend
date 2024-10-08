import { Entity, FetchListParams, FetchListResponse } from '../core';
import { MarketResponse } from './market';
import { Product } from './product';
import { ShoppingEventStatus } from './status';

export interface ShoppingEventCalculatedTotals {
  retailTotal: number;
  wholesaleTotal: number;
  paidValue: number;
  wholesaleSavingValue: number;
  retailPaidDifferenceValue: number;
  wholesalePaidDifferenceValue: number;
}

export interface ShoppingEvent extends Entity {
  status: ShoppingEventStatus;
  market: MarketResponse;
  calculatedTotals: ShoppingEventCalculatedTotals;
  products: Product[];
  createdAt: Date;
  finishedAt?: Date;
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

export interface GetShoppingEventByIdParams {
  shoppingEventId?: string;
}

export interface StartShoppingEventParams {
  marketId: string;
}

export interface StartShoppingEventResult {
  id: string;
  market: string;
  status: string;
  createdAt: Date;
}

export interface EndShoppingEventParams {
  shoppingEventId: string;
  params: {
    totalPaid: number;
  };
}

export interface EndShoppingEventResult extends Omit<ShoppingEvent, 'products'> {}
