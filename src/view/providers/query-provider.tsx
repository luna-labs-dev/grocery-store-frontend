import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppProviderProps } from './provider-types';

export const QueryProvider = ({ children }: AppProviderProps) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
