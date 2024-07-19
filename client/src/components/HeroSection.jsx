import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex">
      {/* box-1 */}
      <a href="">
        <div>
          <img src="" alt="" />
        </div>
        {/* author */}
        <div></div>
        {/* Title */}
        <div></div>
        {/* Description */}
        <p></p>
        <div className="text-[#fd7a33] underline">Read More...</div>
      </a>
      {/* Side Box */}
      <div>
        {/* box-2 */}
        <a href="">
          <div>
            <img src="" alt="" />
          </div>
          {/* author */}
          <div></div>
          {/* Title */}
          <div></div>
          {/* Description */}
          <p></p>
          <div className="text-[#fd7a33] underline">Read More...</div>
        </a>
        {/* box-3 */}
        <a href="">
          <div>
            <img src="" alt="" />
          </div>
          {/* author */}
          <div></div>
          {/* Title */}
          <div></div>
          {/* Description */}
          <p></p>
          <div className="text-[#fd7a33] underline">Read More...</div>
        </a>
      </div>
    </div>
  );
}

export default HeroSection