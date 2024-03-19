import { User } from '@firebase/auth';
import { auth } from '@/main/config/firebase';
import { useContext, createContext } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

interface FirebaseContextState {
  currentUser?: User;
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
