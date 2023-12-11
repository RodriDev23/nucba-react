import React, { useState } from "react";
import ProductData from "../ProductData";
import Footer from "../Footer";
import { FaShoppingCart } from "react-icons/fa";
import ProductsToBuy from "../ProductsToBuy";

const ProductShow = () => {
  const [filter, setFilter] = useState({
    name: "",
    price: "",
  });

  const [showMenu, setShowMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const filteredProducts = ProductData.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(filter.name.toLowerCase());
    const priceMatch = product.price.includes(filter.price);
    return nameMatch && priceMatch;
  });

  const [buyQuantity, setBuyQuantity] = useState(0)

  const handleProductsCarrier = (productId) => {
    const product = ProductData.find((p) => p.id === productId);

    if (selectedProduct && product.id !== selectedProduct.id) {
      setBuyQuantity(1);
    } else {
      setBuyQuantity((prevBuyQuantity) => prevBuyQuantity + 1);
    }

    setSelectedProduct(product);
    setShowMenu(true);
  };


  return (
    <div className="w-full">
      {showMenu ? <ProductsToBuy setShowMenu={setShowMenu} selectedProduct={selectedProduct} buyQuantity={buyQuantity} /> : null}
      <form className="flex justify-center items-center gap-10 mt-10 mb-10">
        <label htmlFor="name" className="mr-2">
          Product Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
          className="mr-4 p-3 rounded-full border border-black text-black"
        />

        <label htmlFor="price" className="mr-2">
          Price:
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={filter.price}
          onChange={handleFilterChange}
          className="mr-4 p-3 rounded-full border border-black text-black"
        />
      </form>

      <div className="container mx-auto mt-8">
        {filter.name || filter.price ? (
          <div className="flex flex-col md:flex-row md:gap-20">
            {filteredProducts.map((filteredProduct) => (
              <div key={filteredProduct.id} className="md:w-1/2">
                <img
                src={filteredProduct.image}
                  alt={filteredProduct.name}
                  className="w-full h-auto"
                />
                <div className="md:ml-8">
                  <h1 className="text-4xl font-bold mb-4">{filteredProduct.name}</h1>
                  <p className="text-gray-600 mb-4">{filteredProduct.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold text-green-500 mr-2">
                      {filteredProduct.price}
                    </span>
                    <span className="text-sm text-gray-500">MSRP $250</span>
                  </div>
                  <button
                    onClick={() => handleProductsCarrier(filteredProduct.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-center">No results found.</p>
        )}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-2xl">
            {filteredProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="bg-white p-4 shadow-md rounded">
                <img
                  src={similarProduct.image}
                  alt={similarProduct.name}
                  className="w-full h-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{similarProduct.name}</h3>
                <p className="text-gray-600 mt-4">Short description of the product.</p>
                <p className="text-gray-600 mt-4">{similarProduct.price}</p>
                <button
                  className="mt-4 px-5 py-2 rounded-md bg-black text-white"
                  onClick={() => handleProductsCarrier(similarProduct.id)}
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductShow;
