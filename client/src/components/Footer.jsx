import React from "react";
import footerVector from "../assets/base.3f5339217a654a163327574449f303a4.svg";
import UpperFooter from "../components/UpperFooter.jsx";
const Footer = () => {
  return (
    <footer className="mt-auto">
      <UpperFooter />
      <div className="relative flex justify-center items-center">
        <img src={footerVector} alt="footer" className="min-w-full"/>
        <div className=" absolute bottom-5 text-white">
          © 2024 Arroz Technology. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
