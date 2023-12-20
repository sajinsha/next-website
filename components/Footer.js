import React from "react";

const Footer = () => {
  return (
  <footer class="footer-1 bg-white-500 py-8 sm:py-10">
  <div class="container mx-auto px-4">
    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 class="text-xl font-bold mb-6">Product</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Download</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Random feature</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Team feature</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Stuff for developers</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Another one</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Last time</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 class="text-xl font-bold mb-6">Resources</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Resource</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Resource name</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Another resource</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Final resource</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 class="text-xl font-bold mb-6">About</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Team</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Locations</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Privacy</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Terms</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 class="text-xl font-bold mb-6">Help</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Support</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Help Center</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-gray-700 hover:text-blue-700">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div class="flex sm:justify-center xl:justify-start">
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-yellow-600 hover:border-yellow-600">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-green-600 hover:border-green-400">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-400">
            <i class="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </div>    
  </div>
  <div className="text-white-600 body-font bg-gray-700 p-5">
    <p className="text-center">Copyright © <span class="text-blue-700 hover:text-blue-200">2023</span> The Canadian Home Realty Inc.</p>
  </div>
  </footer>
  );
};

export default Footer;

