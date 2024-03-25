import { AuthProvider } from './auth-provider';
import { RouterProvider } from './router-provider';

export const Providers = () => {
  return (
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  );
};
