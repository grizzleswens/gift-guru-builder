import React from 'react';

const ProductCard = ({ 
  image, 
  title, 
  buttonText = "Shop Now", 
  buttonLink = "#",
  description 
}) => {
  return (
    <div className="p-6">
      <div className="flex gap-6 mb-4">
        {/* Large Image on Left */}
        <div className="flex-shrink-0 w-64 h-64">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        {/* Content on Right */}
        <div className="flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          
          {/* Button */}
          <a 
            href={buttonLink}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-fit"
          >
            {buttonText}
          </a>
        </div>
      </div>
      
      {/* Description underneath image */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProductCard;