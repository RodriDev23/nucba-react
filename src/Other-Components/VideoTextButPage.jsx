import React from 'react'

 function VIdeoTextBuyPage() {
  return (
    <div className='w-full flex justify-center items-center mt-20'>
        
    <div className='w-[50%] flex flex-col justify-center items-center'>
      <div className='w-36'>
      <h2 className='font-bold text-5xl'>Thanks for buy in Sneaker Fantasy!</h2>
      </div>
    </div>
    
    <div className='w-[50%] flex justify-center items-center'>
    <video
    className="w-[90%] h-[80%] object-cover rounded-md shadow-2xl"
    autoPlay
    loop
    muted
    playsInline
    poster="imgs-page/logo-page.png" // Replace with a poster image for browsers that don't support video autoplay
  >
    <source src="imgs-page/video-hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    </div>
  
   </div>
  )
  }

export default VIdeoTextBuyPage