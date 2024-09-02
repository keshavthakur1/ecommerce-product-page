import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <h3 className="font-semibold mb-2">Navigate</h3>
          <ul>
            <li className="mb-2 border-b border-gray-400"><a href="/" className="hover:underline">Home</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/t-shirts" className="hover:underline">T-Shirts</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tracking & Support</h3>
          <ul>
            <li className="mb-2 border-b border-gray-400"><a href="/returns" className="hover:underline">Returns</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/terms" className="hover:underline">Terms</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/support" className="hover:underline">Support</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/track-order" className="hover:underline">Track Your Order</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">More Info</h3>
          <ul>
            <li className="mb-2 border-b border-gray-400"><a href="/blog" className="hover:underline">Blog</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/reviews" className="hover:underline">Reviews</a></li>
            <li className="mb-2 border-b border-gray-400"><a href="/care" className="hover:underline">Care</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold mb-2">Contact</h3>
        <p className="mb-4">support@nstee.in</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaPinterestP /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
