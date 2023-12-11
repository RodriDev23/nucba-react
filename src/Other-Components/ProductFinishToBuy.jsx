import React from 'react';
import { useLocation } from 'react-router-dom';
import VIdeoTextBuyPage from './VideoTextButPage';
import BuyAndSneaker from './BuyAndSneaker';

function ProductFinishToBuy() {
  const location = useLocation();
  const data =  location.state
  console.log('this is data state', data)
  

  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-start items-center gap-20'>
      <div className='flex flex-col justify-center items-center gap-20'>
        <VIdeoTextBuyPage />
        <BuyAndSneaker product={data.product} buyQuantity={data.buyQuantity} />
      </div>
    </div>
  );
}

export default ProductFinishToBuy;
