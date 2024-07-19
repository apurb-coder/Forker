import React from "react";
import footerVector from "../assets/base.3f5339217a654a163327574449f303a4.svg";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="relative">
        <img src={footerVector} alt="footer" />
        <div className=" absolute bottom-3 text-center">© 2024 Arroz Technology. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
