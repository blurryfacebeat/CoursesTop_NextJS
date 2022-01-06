import { HttpClient } from '@/classes';
const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

export default new HttpClient({
  _baseURL: BASE_URL,
  _headers: { 'Content-type': 'application/json; charset=UTF-8' },
});
