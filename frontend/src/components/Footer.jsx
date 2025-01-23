import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Our company is dedicated to providing exceptional wedding services, from venue selection to decoration and catering. We strive to make your special day truly unforgettable.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li><Link to="">Home</Link></li>
            <li><Link to="">About us</Link></li>
            <li><Link to="">Delivery</Link></li>
            <li><Link to="">Privacy policy</Link></li>

            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 6374555018</li>
                <li>anandanp2257@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Anandan Full-Stack Developer - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
