import React from 'react';
import { Link } from 'react-router-dom';

function BuyAndSneaker({ product, buyQuantity }) {
  
  
  if (!product) {
    return <p>Product is undefined</p>;
  }
  
  const priceString = product.price
  const priceStillString = priceString.replace('$', "")
  const priceInt =  parseInt(priceStillString) 
  console.log('quantity',buyQuantity)
  const totalPrice = buyQuantity * priceInt;
  console.log('total price', totalPrice)

  return (
    <div className='flex flex-col justify-center items-center gap-10 mt-10'>
      
      <div className='w-full flex justify-center items-center gap-[200px]'>
        <div className='w-[50%] flex flex-col justify-center items-center gap-10'>
          <h2 className='font-bold text-2xl'>You are going to buy</h2>
          <button className='bg-black text-white px-5 py-3 rounded-md text-2xl hover:bg-white hover:border border-black hover:text-black'>
            <Link to='/purchaseComplete'>Buy Now!</Link>
          </button>
        </div>

        <div className='w-[50%] flex flex-col justify-center items-center gap-5'>
          <img
            src={product.image}
            className='w-full h-44 rounded-md shadow-2xl'
            alt='Sneaker'
          />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default BuyAndSneaker;