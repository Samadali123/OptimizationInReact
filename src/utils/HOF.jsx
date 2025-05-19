import React from 'react';

// Higher Order Component that adds "Best Seller" tag to products with high ratings
export const withBestSellerBadge = (WrappedComponent) => {
  return function WithBestSellerBadge(props) {
    const { rating, ...otherProps } = props;
    
    const isBestSeller = rating && rating > 4;
    
    return (
      <div className="relative">
        {isBestSeller && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10 shadow-md">
            BEST SELLER
          </span>
        )}
        <WrappedComponent rating={rating} {...otherProps} />
      </div>
    );
  };
};

// Export as named HOC
export const HOC = {
  withBestSellerBadge
};