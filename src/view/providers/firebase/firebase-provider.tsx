import { User } from '@firebase/auth';
import { auth } from '@/main/config/firebase';
import { useState, ReactNode, useEffect } from 'react';

import { FirebaseContext } from './firebase-context';

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({ ...user });
        setUserLoggedIn(true);
      } else {
        setCurrentUser(undefined);
        setUserLoggedIn(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, userLoggedIn, loading };

  return <FirebaseContext.Provider value={value}>{!loading && children}</FirebaseContext.Provider>;
};
