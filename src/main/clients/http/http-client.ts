import axios from 'axios';

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
};
