import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { BASEURL, TIMEOUT } from '../consts/const';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASEURL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  return api;
};