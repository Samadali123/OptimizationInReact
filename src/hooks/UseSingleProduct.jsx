import { useState, useEffect } from 'react';
import { FetchSingleProductService } from '../services/SingleProductService';

const useSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setError('Product ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const result = await FetchSingleProductService(productId);
        
        if (result.error) {
          setError(result.error);
          setProduct(null);
        } else {
          setProduct(result.product);
          setError(null);
        }
      } catch (err) {
        console.error('Error in useSingleProduct hook:', err);
        setError('An unexpected error occurred while fetching the product');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useSingleProduct;