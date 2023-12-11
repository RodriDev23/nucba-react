// ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8">Contact Sneaker Fantasy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Have a question or feedback? Reach out to us using the contact form below.
          </p>
          <p className="text-lg mb-4">
            Sneaker Fantasy is dedicated to providing excellent customer service and ensuring
            you have the best shopping experience.
          </p>
        </div>
        <div>
          <form className="bg-white p-6 rounded-md shadow-md">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;