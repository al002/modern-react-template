import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL, API_TIMEOUT, HTTP_STATUS } from './constants';
import type { ApiResponse, ErrorResponse } from './types';

const instance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError<ErrorResponse>) => {
    if (error.response) {
      const { status } = error.response;
      const errorData = error.response.data;

      if (status === HTTP_STATUS.UNAUTHORIZED) {
        localStorage.removeItem('access-token');
        window.location.href = '/login';
      }

      return Promise.reject(errorData);
    }

    return Promise.reject({
      code: 'NETWORK_ERROR',
      message: 'Network Error',
    });
  }
);

export const http = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.get(url, config);
  },
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.post(url, data, config);
  },
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.put(url, data, config);
  },
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.delete(url, config);
  },
};
