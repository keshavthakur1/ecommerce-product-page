// src/components/Gallery.jsx
import React from 'react';

const Gallery = () => {
  const images = [
    'https://via.placeholder.com/300', // Top-left image
    'https://via.placeholder.com/300', // Top-right image
    'https://via.placeholder.com/300', // Bottom-left image
    'https://via.placeholder.com/300', // Bottom-center image
    'https://via.placeholder.com/300', // Bottom-right image
  ];

  return (
    <div className="p-4">
      {/* Top row with two images */}
      <div className="flex justify-center gap-4 mb-4">
        <img src={images[0]} alt="Gallery Image 1" className="w-1/2 rounded-lg" />
        <img src={images[1]} alt="Gallery Image 2" className="w-1/2 rounded-lg" />
      </div>

      {/* Text in the middle */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">For Every Occasion</h2>
      </div>

      {/* Bottom row with three images */}
      <div className="flex justify-center gap-4">
        <img src={images[2]} alt="Gallery Image 3" className="w-1/3 rounded-lg" />
        <img src={images[3]} alt="Gallery Image 4" className="w-1/3 rounded-lg" />
        <img src={images[4]} alt="Gallery Image 5" className="w-1/3 rounded-lg" />
      </div>
    </div>
  );
};

export default Gallery;
