import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Easy Cancellation Policy        </p>
        <p className=' text-gray-400'>Enjoy hassle-free cancellations with our flexible policy.        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Satisfaction Guarantee        </p>
        <p className=' text-gray-400'>Experience our 7-day satisfaction guarantee: if you're not happy, we're not happy!        </p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Dedicated Support        </p>
        <p className=' text-gray-400'>Get help whenever you need it: our friendly support team is available 24/7</p>
      </div>

    </div>
  )
}

export default OurPolicy
