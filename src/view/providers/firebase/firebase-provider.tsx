import { User } from '@firebase/auth';
import { auth } from '@/main/config/firebase';
import { IdTokenResult } from 'firebase/auth';
import { useState, ReactNode, useEffect } from 'react';

import { FirebaseContext } from './firebase-context';

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [idTokenResult, setIdTokenResult] = useState<IdTokenResult | undefined>(undefined);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser({ ...user });
        setUserLoggedIn(true);
        const idTokenResult = await user.getIdTokenResult();
        setIdTokenResult(idTokenResult);
      } else {
        setCurrentUser(undefined);
        setUserLoggedIn(false);
        setIdTokenResult(undefined);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, idTokenResult, userLoggedIn, loading };

  return <FirebaseContext.Provider value={value}>{!loading && children}</FirebaseContext.Provider>;
};
