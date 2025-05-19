import { useState, useEffect } from 'react';
import { FetchAllProductService } from '../services/FetchProducts';


const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const result = await FetchAllProductService()
      setProducts(result?.product);
      setError(result.error);
      setLoading(false);
    };
     
    getProducts();
  
  }, []);
    
  return { products, loading, error };
};

export default useProducts;