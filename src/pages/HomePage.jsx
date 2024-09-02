
import React from 'react';
import ProductDisplay from '../components/ProductDisplay';
import Gallery from '../components/Gallery';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div>
      <ProductDisplay />
      <Gallery />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default HomePage;
