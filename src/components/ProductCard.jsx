import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, price, rating, id }) => {

  
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">

      <div className="relative pt-[100%]">
        <img 
          className="absolute top-0 left-0 w-full h-full object-contain p-4" 
          src={image} 
          alt={title} 
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-2 h-12">{title}</h2>
        </div>
        
        <div className="flex items-center mb-4 mt-auto">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c3.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 text-sm">({rating.toFixed(1)})</span>
           <Link  className="ml-10 text-gray-600 text-sm" to={`/product/${id}`} className="ml-2 text-gray-600 text-sm">View </Link>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">${Number(price).toFixed(2)}</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;