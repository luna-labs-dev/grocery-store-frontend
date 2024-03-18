import { AuthProvider } from './auth-provider';
import { ConfiguredRouterProvider } from './router-provider';

export const Providers = () => {
  return (
    <AuthProvider>
      <ConfiguredRouterProvider />
    </AuthProvider>
  );
};
