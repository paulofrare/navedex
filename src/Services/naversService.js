import axios from 'axios';

const API_URL = 'https://navedex-api.herokuapp.com/v1/';
const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  },
});

export async function getNavers(token) {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const result = await axiosInstance.get(`navers`, options);
    return result.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function createNaver(data) {
  try {
    const result = await axiosInstance.post(`navers`, data);
    return result.data;
  } catch (err) {
    return false;
  }
}

export async function editNaver(data, id) {
  try {
    const result = await axiosInstance.put(`navers/${id}`, data);
    return result.data;
  } catch (err) {
    return false;
  }
}

export async function deleteNaver(id) {
  try {
    const result = await axiosInstance.delete(`navers/${id}`);
    return result.data;
  } catch (err) {
    return false;
  }
}
