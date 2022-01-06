import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { IHttpClient, IHttpOptions } from './HttpClient.types';

class HttpClient implements IHttpClient {
  readonly instance: AxiosInstance;

  constructor(options?: IHttpOptions) {
    this.instance = axios.create({
      baseURL: options?._baseURL ?? '',
      headers: options?._headers ?? {},
      params: options?._params ?? {},
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor() {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private handleResponse = ({ data }: AxiosResponse): Promise<AxiosResponse> =>
    data;

  private handleError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);

  get = async <T = never, R = AxiosResponse<T>>(
    resource: string,
    params?: Record<string, unknown>
  ): Promise<R> => await this.instance.get(resource, { params });

  post = async <T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown>,
    params?: Record<string, unknown>
  ): Promise<R> => await this.instance.post(resource, body, { params });
}

export default HttpClient;
