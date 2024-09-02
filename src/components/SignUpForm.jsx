import React from 'react';

const SignUpForm = () => {
  return (
    <div className="bg-black text-white p-6 text-center mt-8">
      <h2 className="text-2xl font-semibold mb-4 uppercase">
        Sign up for daily discounts and offers
      </h2>
      <p className="mb-4">
        Signup with your email for Daily updates about our Discounts, Sales, and Offers. Get a wide variety of coupon codes on your Mail.
      </p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Your email"
          className="p-2 rounded-l-md outline-none"
        />
        <button className="bg-blue-300 text-black px-4 py-2 w-auto rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
