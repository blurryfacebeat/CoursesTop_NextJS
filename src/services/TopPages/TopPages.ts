import { MainHttpClient } from '@/utils';
import { MenuItem, TopPageModel, ProductModel } from './TopPages.type';

export const getMenu = async (
  body: Record<string, unknown>
): Promise<Array<MenuItem>> =>
  await MainHttpClient.post('/api/top-page/find', body);

export const getPage = async (
  alias: string | Array<string> | undefined
): Promise<TopPageModel> =>
  await MainHttpClient.get(`/api/top-page/byAlias/${alias}`);

export const getProducts = async (
  body: Record<string, unknown>
): Promise<ProductModel> =>
  await MainHttpClient.post('/api/product/find', body);
