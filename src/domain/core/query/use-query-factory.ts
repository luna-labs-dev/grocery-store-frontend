import { useQuery } from '@tanstack/react-query';

export interface UseQueryFactory<HttpParams, HttpResponse> {
  queryKey: string;
  queryFunction: {
    fn: (params: HttpParams) => Promise<HttpResponse>;
    params: HttpParams;
  };
  retry?: boolean | number;
}

export const useQueryFactory = <HttpParams, HttpResponse>({
  queryKey,
  queryFunction: { fn, params },
  retry,
}: UseQueryFactory<HttpParams, HttpResponse>) => {
  const query = useQuery({
    queryKey: [queryKey, params],
    queryFn: ({ queryKey }) => fn(queryKey[1] as HttpParams),
    retry,
  });

  return { ...query };
};
