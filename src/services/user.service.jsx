import axios from 'axios';
import { CheckEnv } from './CheckEnv.service';


export const FetchUsersService = async () => {
  const API_URL = CheckEnv();
  try {
    const response = await axios.get(`${API_URL}/users`);
    return {
      users: response.data,
      error: null,
      loading: false
    };
  } catch (err) {
    console.error("Error while fetching Users", err)
    return {
      users: null,
      error: 'Failed to fetch users. Please try again later.',
      loading: false
    };
  }
};