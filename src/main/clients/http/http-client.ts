import { HttpError } from '@/domain';
import axios, { AxiosError } from 'axios';
import { auth } from '@/main/config/firebase';

import { env } from '../../config/env';

const { baseUrl } = env.backend;

export const httpClient = axios.create({
  baseURL: baseUrl,
});

export const setAuthToken = (token: string) => {
  // TODO Remove this console.log
  console.log(token);

  httpClient.interceptors.request.use((request) => {
    request.headers.set('x-authorization-token', token);
    return request;
  });

  httpClient.interceptors.response.use(undefined, (error: AxiosError<HttpError>) => {
    if (error.response?.data?.code === 'UNAUTHORIZED_ERROR') {
      auth.currentUser?.getIdToken(true);
    }
    throw error;
  });
};
