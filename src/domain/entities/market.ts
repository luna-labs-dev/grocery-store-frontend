import { Entity, FetchListResponse } from '../core';

export interface Market extends Entity {
  code: string;
  name: string;
  createdAt: Date;
  createdBy: string;
}

export interface MarketListItem extends Pick<Market, 'id' | 'code' | 'name'> {}

export interface MarketListResponse extends FetchListResponse<MarketListItem> {}
