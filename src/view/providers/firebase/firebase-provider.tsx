import { User } from '@firebase/auth';
import { auth } from '@/main/config/firebase';
import { IdTokenResult } from 'firebase/auth';
import { useState, ReactNode, useEffect } from 'react';

import { FirebaseContext } from './firebase-context';

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [tokens, setTokens] = useState<IdTokenResult | undefined>(undefined);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser({ ...user });
        setUserLoggedIn(true);
        const tokens = await user.getIdTokenResult();
        setTokens(tokens);
      } else {
        setCurrentUser(undefined);
        setUserLoggedIn(false);
        setTokens(undefined);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, tokens, userLoggedIn, loading };

  return <FirebaseContext.Provider value={value}>{!loading && children}</FirebaseContext.Provider>;
};
