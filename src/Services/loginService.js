import axios from 'axios';

const API_URL = 'https://navedex-api.herokuapp.com/v1/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});
export async function fetchLogin(email, password) {
  const data = { email: email, password: password };
  try {
    const result = await axiosInstance.post(`users/login`, data);
    return result.data;
  } catch (err) {
    throw new Error(err);
  }
}
