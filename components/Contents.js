import React from 'react'
import Image from 'next/image'
import Image_1 from './Photo2.webp'
import Image_2 from './Photo4.webp'
import Image_3 from './Photo5.webp'

const Contents = () => {
  return (
    <div className='px-5 py-24'>
      <div className='text-center'>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">List of <span class="text-blue-600 dark:text-blue-500">Properties</span>.</h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-500">Find MLS listings and Real Estate properties in Canada</p>
      </div>
    <div class=" mx-4 my-4 sm:flex grid-cols-3 gap-3 max-sm:flex-wrap">
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_1} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">3-5 | Single Family</h2>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-green-900 dark:text-green-300">For Sale</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_2} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.184" height="11.456" viewBox="0 0 17.184 11.456"><path id="Icon_ionic-md-bed" data-name="Icon ionic-md-bed" d="M9.185,15.108A2.292,2.292,0,1,0,6.84,12.817,2.316,2.316,0,0,0,9.185,15.108Zm9.375-4.582H12.309v5.348H6.062V9H4.5V20.456H6.062V18.165H20.122v2.291h1.562V13.582A3.09,3.09,0,0,0,18.561,10.526Z" transform="translate(-4.5 -9)" fill="#fff"></path></svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">4-3 | Single Family</h2>
                <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-red-900 dark:text-red-300">Sold</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_3} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">3-5 | Single Family</h2>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-green-900 dark:text-green-300">For Sale</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_1} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.184" height="11.456" viewBox="0 0 17.184 11.456"><path id="Icon_ionic-md-bed" data-name="Icon ionic-md-bed" d="M9.185,15.108A2.292,2.292,0,1,0,6.84,12.817,2.316,2.316,0,0,0,9.185,15.108Zm9.375-4.582H12.309v5.348H6.062V9H4.5V20.456H6.062V18.165H20.122v2.291h1.562V13.582A3.09,3.09,0,0,0,18.561,10.526Z" transform="translate(-4.5 -9)" fill="#fff"></path></svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">2-4 | Single Family</h2>
                <span class="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-orange-900 dark:text-orange-300">Booked</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    
  </div>
  <div class=" mx-4 my-4 sm:flex grid-cols-3 gap-3 max-sm:flex-wrap">
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_2} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">4-3 | Single Family</h2>
                <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-red-900 dark:text-red-300">For Sale</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_3} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.184" height="11.456" viewBox="0 0 17.184 11.456"><path id="Icon_ionic-md-bed" data-name="Icon ionic-md-bed" d="M9.185,15.108A2.292,2.292,0,1,0,6.84,12.817,2.316,2.316,0,0,0,9.185,15.108Zm9.375-4.582H12.309v5.348H6.062V9H4.5V20.456H6.062V18.165H20.122v2.291h1.562V13.582A3.09,3.09,0,0,0,18.561,10.526Z" transform="translate(-4.5 -9)" fill="#fff"></path></svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">3-5 | Single Family</h2>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-green-900 dark:text-green-300">For Sale</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_1} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">3-5 | Single Family</h2>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-green-900 dark:text-green-300">For Sale</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
    <div class="flex flex-wrap justify-center mt-10">
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
        <Image src={Image_2} alt="Vector6" className="w-full overflow-hidden" />
            <div class="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.184" height="11.456" viewBox="0 0 17.184 11.456"><path id="Icon_ionic-md-bed" data-name="Icon ionic-md-bed" d="M9.185,15.108A2.292,2.292,0,1,0,6.84,12.817,2.316,2.316,0,0,0,9.185,15.108Zm9.375-4.582H12.309v5.348H6.062V9H4.5V20.456H6.062V18.165H20.122v2.291h1.562V13.582A3.09,3.09,0,0,0,18.561,10.526Z" transform="translate(-4.5 -9)" fill="#fff"></path></svg>
                </div>
                <h2 class="text-white dark:text-white text-base font-medium mt-3">2-4 | Single Family</h2>
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Booked</span>

            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <a href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded">$<span className='blur-sm rounded'>559.99 /m</span>&nbsp;- <i>Add to Cart</i></a>
            </div>
        </div>
    </div>
    </div>
    <br/>
  </div>
  </div>
  )
}

export default Contents