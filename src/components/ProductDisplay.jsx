import React from 'react';

const ProductDetail = () => {
  const thumbnails = [
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Product"
          className="w-full md:w-3/4 rounded-lg"
        />
        <div className="flex space-x-2 mt-4">
          {thumbnails.map((src, index) => (
            <img key={index} src={src} alt={`Thumbnail ${index}`} className="w-12 h-12 rounded-full border" />
          ))}
        </div>

        <div className="text-center mt-6">
          <h1 className="text-2xl font-bold">Off White 100% Supima Cotton T-Shirts with Invisible Stitching</h1>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-500">(38 reviews)</span>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <span className="text-red-500 text-2xl font-bold">Rs. 1,999.00</span>
            <span className="line-through text-gray-400 text-lg">Rs. 2,699.00</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-6">
          <div className="flex space-x-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button key={size} className="border rounded-full px-4 py-2 hover:bg-gray-200">
                {size}
              </button>
            ))}
          </div>

          <div className="flex space-x-2 mt-4">
            {['#4A4A4A', '#D4AF37', '#FF6347', '#708090'].map(color => (
              <button key={color} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full border"></button>
            ))}
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <span>Quantity</span>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span>1</span>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">+</button>
          </div>

          <div className="flex space-x-4 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Add to Cart</button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">Buy It Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
