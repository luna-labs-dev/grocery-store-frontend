import { ReactNode } from 'react';

import { FirebaseProvider } from './firebase';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <FirebaseProvider>{children}</FirebaseProvider>;
};
