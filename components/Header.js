import React from "react";
import Logo from "./Logo.png";
import Image from "next/image";
import PhoneIcon from "./Vector.png";
import EmailIcon from "./Vectortwo.png";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
          <Image src={Logo} alt="Logo" className="ml-3 text-xl" />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="flex mr-2 hover:text-gray-900">
            <Image src={PhoneIcon} alt="Phone" width={20} height={20} />
            <span className="ml-2">+1(905)2061444</span>
          </a>

          <a className="flex mr-2 hover:text-gray-900">
            <Image src={EmailIcon} alt="Email" width={30} height={10} />
            <span className="ml-2">info@thecanadianhome.com</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
