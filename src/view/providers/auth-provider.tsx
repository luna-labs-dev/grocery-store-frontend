import { ReactNode } from 'react';
import { env } from '@/main/config/env';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { clientId } = env.googleAuth;
  return <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>;
};
