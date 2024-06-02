import { HttpError } from '@/domain';
import { auth } from '@/main/config/firebase';
import axios, { AxiosError } from 'axios';

import { env } from '../../config/env';

const { baseUrl } = env.backend;

export const httpClient = axios.create({
  baseURL: baseUrl,
});

export const setAuthToken = (token: string) => {
  // TODO Remove this console.log

  httpClient.interceptors.request.use((request) => {
    if (request.headers.get('x-authorization-token') !== token) {
      request.headers.set('x-authorization-token', token);
    }
    return request;
  });

  httpClient.interceptors.response.use(undefined, (error: AxiosError<HttpError>) => {
    if (error.response?.data?.code === 'UNAUTHORIZED_ERROR') {
      auth.currentUser?.getIdToken(true);
    }
    throw error;
  });
};
