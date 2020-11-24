import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://suyuncdn-backend.farmasiexperience.com/api/v1/';

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export function Base(): AxiosInstance {
  return instance;
}
