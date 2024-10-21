import axios from 'axios';

const BASE_URL = 'https://monitor-backend-rust.vercel.app/api';

export const getPets = () => axios.get(`${BASE_URL}/pets`);
export const getProducts = () => axios.get(`${BASE_URL}/products`);
export const getCustomers = () => axios.get(`${BASE_URL}/customers`);