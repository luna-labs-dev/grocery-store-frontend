import { FetchListParams } from '../core';
import { MarketListResponse } from '../entities';

export interface GetMarketList {
  execute: (params: FetchListParams) => Promise<MarketListResponse>;
}
