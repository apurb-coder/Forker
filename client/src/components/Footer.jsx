import React from 'react'
import footerVector from "../assets/base.3f5339217a654a163327574449f303a4.svg"
const Footer = () => {
  return (
    <div className=''>
      <div className='absolute flex justify-center bottom-0'>
        <div className='absolute bottom-5 text-white'>© 2024 Arroz Technology. All rights reserved</div>
        <img src={footerVector} alt="footer" className=' z-[-10]' />
      </div>
    </div>
  );
}

export default Footer