import { Toaster } from '@/components';
import { AuthProvider } from './auth-provider';
import { QueryProvider } from './query-provider';
import { RouterProvider } from './router-provider';

export const Providers = () => {
  return (
    <AuthProvider>
      <QueryProvider>
        <>
          <RouterProvider />
          <Toaster />
        </>
      </QueryProvider>
    </AuthProvider>
  );
};
