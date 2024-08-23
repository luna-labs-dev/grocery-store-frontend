import { HttpError } from '@/domain';
import axios, { AxiosError } from 'axios';

import { env } from '@/config/env';
import { history } from '@/domain/utils/history';

const { baseUrl } = env.backend;

console.log(baseUrl);

export const httpClient = axios.create({
  baseURL: baseUrl,
});

export const setAuthToken = (token: string) => {
  // TODO Remove this console.log
  console.log(token);

  httpClient.interceptors.request.use((request) => {
    if (request.headers.get('x-authorization-token') !== token) {
      request.headers.set('x-authorization-token', token);
    }
    return request;
  });

  httpClient.interceptors.response.use(undefined, (error: AxiosError<HttpError>) => {
    if (
      error.response?.data?.code === 'UNAUTHORIZED_ERROR' &&
      error.response.data.requiredAction === 'add-user-to-family'
    ) {
      history.navigate('/family/onboarding');
    }

    throw error;
  });
};
