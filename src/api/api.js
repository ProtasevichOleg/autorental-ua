import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://648884700e2469c038fde8b8.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCars = async () => {
  try {
    const response = await apiClient.get('adverts');
    return response.data;
  } catch (error) {
    throw error;
  }
};
