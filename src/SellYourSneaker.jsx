import React from 'react';

const SellYourSneaker = () => {
  return (
    <section className="bg-gray-100 py-10 w-full mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Sell Your Sneaker</h2>
        <p className="text-gray-600 mb-8 text-center text-xl">
          Ready to find a new home for your sneakers? Fill out the form below to sell your sneakers with us!
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="sneakerName" className="block text-sm font-semibold text-gray-800">
              Sneaker Name
            </label>
            <input
              type="text"
              id="sneakerName"
              name="sneakerName"
              className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
              placeholder="Enter the name of your sneaker"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sneakerDescription" className="block text-sm font-semibold text-gray-800">
              Sneaker Description
            </label>
            <textarea
              id="sneakerDescription"
              name="sneakerDescription"
              rows="4"
              className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
              placeholder="Enter a brief description of your sneaker"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-semibold text-gray-800">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
              placeholder="Enter the selling price"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sneakerImage" className="block text-sm font-semibold text-gray-800">
              Sneaker Image
            </label>
            <input
              type="file"
              id="sneakerImage"
              name="sneakerImage"
              accept="image/*"
              className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
            />
            <p className="text-xs text-gray-600 mt-2">Upload an image of your sneaker (JPEG, PNG, or GIF)</p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SellYourSneaker;