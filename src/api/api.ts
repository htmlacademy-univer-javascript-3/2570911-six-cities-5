import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { ApiUrl, Timeout } from '../consts/const';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiUrl,
    timeout: Timeout,
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