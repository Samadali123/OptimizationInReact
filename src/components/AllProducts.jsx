
import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/UseProducts';
import { HOC } from '../utils/HOF';

const AllProducts = () => {
  const { products = [], loading, error } = useProducts();
  
  // Apply the HOC to ProductCard
  const EnhancedProductCard = HOC.withBestSellerBadge(ProductCard);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 bg-red-50 text-red-600 rounded-lg">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) && products.map((product) => (
          <EnhancedProductCard
            key={product.id}
            id = {product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating?.rate || 0}
          />
        ))}
      </div>
      
      {(!Array.isArray(products) || products.length === 0) && !loading && !error && (
        <div className="text-center p-6">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;