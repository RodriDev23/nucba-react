import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa"
import CardShopping from './Other-Components/CardShopping';


const ProductsToBuy = ({ setShowMenu, selectedProduct, buyQuantity }) => {


  return (
    <div className='fixed  top-0 right-0 h-full w-40 p-4 bg-white border border-red-500'>
        
      <div className='flex flex-col justify-center items-center gap-20 text-black'>
      <h3>Products to Buy</h3>
        <FaShoppingCart />   
        {selectedProduct && <CardShopping product={selectedProduct} buyQuantity={buyQuantity} />}
        <button className="mt-4 px-5 py-2 rounded-md bg-black text-white" onClick={() => setShowMenu(false)}>
          Close
        </button>
      </div>
    </div>
  );
}



export default ProductsToBuy;