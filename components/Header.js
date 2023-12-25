import React from "react";
import Logo from "./Logo.png";
import Image from "next/image";
import PhoneIcon from "./Vector.png";
import EmailIcon from "./Vectortwo.png";
import SearchIcon from "./navbar-search.webp"

function Header() {
  return (
    <header className="text-gray-600 body-font ml-3 mr-3">
      <div className="container mx-auto flex flex-wrap py-2 flex-row md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0" href="#">
          <Image src={Logo} alt="Logo" className="text-xl" />
        </a>
        <a role="button" className="fltr-nav mt-2 ms-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path id="filter" d="M3,14.667v1.667H8V14.667Zm0-10V6.333h8.333V4.667ZM11.333,18V16.333H18V14.667H11.333V13H9.667v5Zm-5-10V9.667H3v1.667H6.333V13H8V8ZM18,11.333V9.667H9.667v1.667ZM13,8h1.667V6.333H18V4.667H14.667V3H13Z" transform="translate(-3 -3)" fill="#0d73c1"></path></svg>
        </a>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="flex mr-2 ml-2 hover:text-gray-900">
            <Image className="w-5 h-5" src={PhoneIcon} alt="Phone"/>
            <span className="ml-2">+1(905)2061444</span>
          </a>
        <br/>
          <a className="flex mr-2 ml-2 hover:text-gray-900">
            <Image className="w-7 h-5" src={EmailIcon} alt="Email"/>
            <span className="ml-2">info@thecanadianhome.com</span>
          </a>
        <br/>
          <div>
            <form class="flex ml-2 mr-2 py-2">
                <Image className="w-5 h-5 mt-2" src={SearchIcon} alt="search-icon"/>
                <input placeholder="Address, City, Street" aria-label="Search" type="search" class="form-control ml-2 search-icon bg-gray-300 dark:bg-gray-700" value=""></input> 
            </form>
          </div>
        </nav>
    </header>
  );
}

export default Header;
