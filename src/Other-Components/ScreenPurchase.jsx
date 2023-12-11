import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function ScreenCompletedPurchase() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center gap-10'>
      <FaCheckCircle className='text-green-500 text-6xl' />
      <p className='text-2xl font-bold'>Thanks for Your Purchase!</p>
      <p className='text-gray-600'>
        An email has been sent with all the information about your purchase.
      </p>
      <div className='mt-8 p-4 bg-gray-100 rounded-md'>
        <p className='text-lg font-semibold'>What's next?</p>
        <ul className='list-disc pl-5 mt-2'>
          <li>Expect your order to be processed and shipped.</li>
          <li>Track your order using the provided tracking information.</li>
          <li>Contact our support if you have any questions.</li>
        </ul>
      </div>
    </div>
  );
}

export default ScreenCompletedPurchase;