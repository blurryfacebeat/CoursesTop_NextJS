import { AxiosInstance, AxiosRequestHeaders } from 'axios';

export interface IHttpClient {
  instance: AxiosInstance;
}

export interface IHttpOptions {
  _baseURL?: string;
  _headers?: AxiosRequestHeaders;
  _params?: Record<string, unknown>;
}
