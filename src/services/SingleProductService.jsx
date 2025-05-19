import axios from 'axios';
import { CheckEnv } from './CheckEnv.service';


export const FetchSingleProductService = async (productId) => {
  const API_URL = CheckEnv();
  
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return {
      product: response.data,
      error: null,
      loading: false
    };
  } catch (err) {
    console.error(`Error fetching product ${productId}:`, err);
    return {
      product: null,
      error: 'Failed to fetch product details. Please try again later.',
      loading: false
    };
  }
};