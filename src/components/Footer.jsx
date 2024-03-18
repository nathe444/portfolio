import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-900 '>
      <hr className='mb-20 w-full border-gray-700'/>
      <div className='border-2 border-gray-700 w-3/5 border-peach flex justify-center items-center gap-8 text-gray-300 flex-col md:flex-row py-5 rounded-2xl mb-8 text-xs font-bold tablet:flex-col md:text-lg'> 
        <div className='flex justify-center items-center gap-2'> 
          <img src="/assets/phone.png" alt="" className='w-6'/>
          <p>+251993944704</p>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <img src="/assets/email.png" alt="" className='w-10'/>
          <p>natnaelm552@gmail.com</p>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <img src="/assets/location.png" alt="" className='w-6'/>
          <p>Addis Ababa , Ethiopia</p>
        </div>
      </div>

      <h1 className='textxl text-white mb-4'>Made By Natnael</h1>

      <p className='text-gray-400 mb-20 text-md'>Copyright &copy; 2024.All rights reserved</p>
      
    </div>
  )
}

export default Footer
