export interface FetchListParams {
  pageIndex: number;
  pageSize: number;
  orderBy: string;
  orderDirection: 'asc' | 'desc';
}

export interface FetchListResponse<TResponse> {
  total: number;
  items: TResponse[];
}
