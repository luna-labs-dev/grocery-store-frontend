import { auth } from '@/main/config/firebase';
import type { User } from '@firebase/auth';
import { GoogleAuthProvider, type IdTokenResult, signInWithPopup } from 'firebase/auth';
import { createContext, useContext } from 'react';

export interface FirebaseContextState {
  currentUser?: User;
  idTokenResult?: IdTokenResult;
  userLoggedIn: boolean;
  loading: boolean;
}

export const FirebaseContext = createContext<FirebaseContextState>({
  userLoggedIn: false,
  loading: true,
});

export const useFirebase = () => {
  const context = useContext(FirebaseContext);

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    return result;
  };

  const signOut = () => {
    auth.signOut();
  };
  return {
    signinWithGoogle,
    signOut,
    context,
  };
};
