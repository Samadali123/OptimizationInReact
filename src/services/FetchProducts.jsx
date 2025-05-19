import axios from 'axios';
import { CheckEnv } from './CheckEnv.service';


 export const FetchAllProductService = async () => {
  const API_URL = CheckEnv();
  
  try {
    const response = await axios.get(`${API_URL}/products`);
    // console.log(response?.data)
    return {
      product: response.data,
      error: null,
      loading: false
    };
  } catch (err) {
     console.error("Error Fetching Product",err);
    return {
      product: null,
      error: 'Failed to fetch product details. Please try again later.',
      loading: false
    };
  }
};

