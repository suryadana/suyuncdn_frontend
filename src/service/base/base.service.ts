import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export function Base(): AxiosInstance {
  return instance;
}
