import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[400px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>We are a team of passionate individuals dedicated to bridging the gap between villagers and essential services. Our journey began with a simple yet ambitious idea: to create a platform that connects villagers to the services they need, when they need them.              </p>
              <p>Since our inception, we've worked tirelessly to curate a diverse range of services that cater to every aspect of village life. From daily essentials like grocery delivery and healthcare services to village development initiatives and more, our platform is designed to make life easier, more convenient, and more enjoyable for villagers.              </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to empower villagers with choice, convenience, and confidence. We're committed to providing a seamless experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
              <p>We envision a future where villagers have access to all the services they need, right at their fingertips. A future where village life is easier, more convenient, and more fulfilling. And we're working tirelessly to make that vision a reality.              </p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We carefully select and vet each service provider to ensure they meet our high standards.            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Our platform offers a seamless experience, making it easy to find and access the services you need.            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated team is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
