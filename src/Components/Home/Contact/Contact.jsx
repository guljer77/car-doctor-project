import React from 'react'
import Container from '../../Shared/Container';
import { FaCalendarAlt, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';

function Contact() {
  return (
    <div className='pb-10'>
      <Container>
        <div className='bg-[#151515] py-16 px-5 rounded-lg font-inter text-white'>
          <div className='lg:grid grid-cols-3 gap-8'>
            <div className='flex items-center lg:pb-0 pb-5'>
              <div>
                <span className='text-[20px]'><FaCalendarAlt /></span>
              </div>
              <div className='pl-5'>
                <p className='text-[14px] font-light'>We are open monday-friday</p>
                <h4 className='text-[18px] font-semibold'>7:00 am - 9:00 pm</h4>
              </div>
            </div>
            <div className='flex items-center lg:pb-0 pb-5'>
              <div>
                <span className='text-[20px]'><FaPhoneAlt /></span>
              </div>
              <div className='pl-5'>
                <p className='text-[14px] font-light'>Have a question?</p>
                <h4 className='text-[18px] font-semibold'>+2546 251 2658</h4>
              </div>
            </div>
            <div className='flex items-center lg:pb-0 pb-5'>
              <div>
                <span className='text-[20px]'><FaSearchLocation /></span>
              </div>
              <div className='pl-5'>
                <p className='text-[14px] font-light'>Need a repair? our address</p>
                <h4 className='text-[18px] font-semibold'>Liza Street, New York</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact