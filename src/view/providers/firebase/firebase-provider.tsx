import { setAuthToken } from '@/main/clients';
import { auth } from '@/main/config/firebase';
import { type ReactNode, useCallback, useEffect, useReducer } from 'react';

import { FirebaseContext, type FirebaseContextState } from './firebase-context';

const types = ['AUTH_USER'] as const;
type Types = (typeof types)[number];

type Payload = {
  type: Types;
  context: Partial<FirebaseContextState>;
};

const initialState: FirebaseContextState = {
  loading: true,
  userLoggedIn: false,
};

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const reducer = (state: FirebaseContextState, action: Payload) => {
    if (action.type === 'AUTH_USER') {
      return { ...state, ...action.context };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(() => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult(true);

          setAuthToken(idTokenResult.token);

          dispatch({
            type: 'AUTH_USER',
            context: {
              currentUser: { ...user },
              userLoggedIn: true,
              idTokenResult,
              loading: false,
            },
          });
        } else {
          dispatch({
            type: 'AUTH_USER',
            context: {
              currentUser: undefined,
              userLoggedIn: false,
              idTokenResult: undefined,
              loading: false,
            },
          });
        }
      });

      auth.onIdTokenChanged(async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult();

          setAuthToken(idTokenResult.token);

          dispatch({
            type: 'AUTH_USER',
            context: {
              currentUser: { ...user },
              userLoggedIn: true,
              idTokenResult,
              loading: false,
            },
          });
        } else {
          dispatch({
            type: 'AUTH_USER',
            context: {
              currentUser: undefined,
              userLoggedIn: false,
              idTokenResult: undefined,
              loading: false,
            },
          });
        }
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: 'AUTH_USER',
        context: {
          currentUser: undefined,
          userLoggedIn: false,
          idTokenResult: undefined,
          loading: false,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <FirebaseContext.Provider value={state}>{!state.loading && children}</FirebaseContext.Provider>
  );
};
