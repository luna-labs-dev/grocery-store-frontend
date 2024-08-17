import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';

import { env } from './env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const { apiKey, appId, authDomain, measurementId, messagingSenderId, projectId, storageBucket } =
  env.googleAuth;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
