import React from 'react'
import FrokerLogo from '../assets/frokerLogo.png'

const NavBar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center px-16 py-3 bg-white">
      <img src={FrokerLogo} alt="logo" className="w-[7.1875rem] h-[3.5rem]" />
      <ul className='flex space-x-16 text-[#F76f32] text-[19.2px] font-semibold'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/froker">DiscoverFroker</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar