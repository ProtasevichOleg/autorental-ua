import axios from 'axios';

export const fetchCars = async page => {
  try {
    const response = await axios.get(
      `https://648884700e2469c038fde8b8.mockapi.io/adverts?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the cars:', error);
  }
};
