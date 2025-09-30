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
        <div className="flex-shrink-0 w-[500px] h-[500px]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        {/* Content on Right */}
        <div className="flex flex-col flex-1 mt-[180px]">
          {/* Title */}
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          
          {/* Button */}
          <a 
            href={buttonLink}
            className="inline-flex items-center justify-center px-6 py-4 bg-burgundy text-burgundy-foreground hover:bg-burgundy/90 font-medium rounded-md transition-colors w-fit"
          >
            {buttonText}
          </a>
        </div>
      </div>
      
      {/* Description underneath image */}
      <p className="text-xl text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProductCard;