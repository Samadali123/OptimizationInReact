import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import useSingleProduct from '../hooks/UseSingleProduct';

const SingleProduct = () => {
  const { productId } = useParams();
  const { product, loading, error } = useSingleProduct(productId)

  // Render loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-red-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Error</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <FaArrowLeft className="mr-2" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Render no product found state
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <FaArrowLeft className="mr-2" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8">
            <FaArrowLeft className="mr-2" /> Back to Products
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-[400px] object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <div className="uppercase text-indigo-600 text-sm font-semibold tracking-wide mb-2">
                {product.category}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              <div className="text-2xl font-bold text-gray-900 mb-6">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition duration-300">
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 py-3 px-6 rounded-lg font-semibold transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Product Details */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <ul className="space-y-2">
                <li className="flex border-b border-gray-100 py-2">
                  <span className="font-medium w-1/3 text-gray-600">Category</span>
                  <span className="w-2/3 capitalize">{product.category}</span>
                </li>
                <li className="flex border-b border-gray-100 py-2">
                  <span className="font-medium w-1/3 text-gray-600">ID</span>
                  <span className="w-2/3">{product.id}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center py-2">
                  <span className="w-8">📦</span>
                  <span>Free shipping on orders over $50</span>
                </li>
                <li className="flex items-center py-2">
                  <span className="w-8">🚚</span>
                  <span>Delivery within 3-5 business days</span>
                </li>
                <li className="flex items-center py-2">
                  <span className="w-8">↩️</span>
                  <span>30-day return policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct