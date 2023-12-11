import React from 'react';
import ProductData from './ProductData';


const Products = () => {
  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-6 mt-5">Fav Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ProductData.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md gap-4 mt-10 mb-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-white">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;