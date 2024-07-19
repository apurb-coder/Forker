import React from "react";
import ArrowLogo from "../assets/arrow_wxeel0.jpg";
import FrokerLogo from "../assets/frokerLogo.png";
import LocationIcon from "../assets/locationIcon.svg";
import MailIcon from "../assets/mailIcon.svg";
import TwitterLogo from "../assets/twitterLogo.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import FaceBookLogo from "../assets/facebook.svg";
import InstaGramLogo from "../assets/instagram.svg";
import YoutubeLogo from "../assets/youtube.svg";

const UpperFooter = () => {
  return (
    <div>
      <div>{/* TODO: NewsLetter */}</div>
      <div className="flex justify-around items-center mb-16">
        <img src={FrokerLogo} alt="frokerlogo" className="w-[168px] h-[82px]" />
        <div className="space-y-3">
          <h4 className="text-[#F76f32] font-semibold text-2xl">Quicklink</h4>
          <div className="flex items-center">
            <img
              src={ArrowLogo}
              alt="arrow"
              className="w-[12.9px] h-[12.9px]"
            />
            Home
          </div>
          <div className="flex items-center">
            <img
              src={ArrowLogo}
              alt="arrow"
              className="w-[12.9px] h-[12.9px]"
            />
            About US
          </div>
          <div className="flex items-center">
            <img
              src={ArrowLogo}
              alt="arrow"
              className="w-[12.9px] h-[12.9px]"
            />
            Privacy policy
          </div>
          <div className="flex items-center">
            <img
              src={ArrowLogo}
              alt="arrow"
              className="w-[12.9px] h-[12.9px]"
            />
            Terms & Conditions
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-[#F76f32] font-semibold text-2xl">Contacts</h4>
          <div className="flex space-x-3">
            <img src={LocationIcon} alt="locationicon" />
            <div>Whitefield, Bengaluru, 560066</div>
          </div>
          <div className="flex space-x-3">
            <img src={MailIcon} alt="locationicon" />
            <div>support@froker.in</div>
          </div>
          <div className="flex space-x-3">
            <a href="https://twitter.com/FrokerSocial" target="_blank">
              <img src={TwitterLogo} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/company/froker/" target="_blank">
              <img src={LinkedInLogo} alt="linkedIn" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu"
              target="_blank"
            >
              <img src={FaceBookLogo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/frokerofficial/" target="_blank">
              <img src={InstaGramLogo} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/@frokerofficial" target="_blank">
              <img src={YoutubeLogo} alt="youtube" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-[#F76f32] font-semibold text-2xl">
            Scan To Download
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
