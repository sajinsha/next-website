import React from 'react';
import Image from 'next/image';
import Image_1 from './Photo2.webp';
import Image_2 from './Photo4.webp';
import Image_3 from './Photo5.webp';

const propertyData = [
  {
    id: 1,
    image: Image_1,
    category: '3-5 | Single Family',
    status: 'For Sale',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy...',
    price: '599.99 /m',
  },
  {
    id: 2,
    image: Image_2,
    category: '3-4 | Single Family',
    status: 'Booked',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy...',
    price: '529.99 /m',
  },
  {
    id: 3,
    image: Image_3,
    category: '5-6 | Single Family',
    status: 'For Sale',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy...',
    price: '799.99 /m',
  },
  {
    id: 4,
    image: Image_1,
    category: '3-5 | Single Family',
    status: 'Sold',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy...',
    price: '599.99 /m',
  },
  {
    id: 5,
    image: Image_2,
    category: '3-4 | Single Family',
    status: 'For Sale',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy...',
    price: '529.99 /m',
  },
  {
    id: 6,
    image: Image_3,
    category: '5-6 | Single Family',
    status: 'Booked',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy...',
    price: '799.99 /m',
  },
  // Add more property data objects as needed
];

const Contents = () => {
    return (
        <div className="px-5 py-24">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            List of <span className="text-blue-600 dark:text-blue-500">Properties</span>.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-500">
            Find MLS listings and Real Estate properties in Canada
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 my-4">
          {propertyData.map((property) => (
            <div key={property.id} className="flex flex-wrap justify-center mt-10">
              <div className="p-4 max-w-sm">
                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-gray-700 p-4 flex-col">
                  <Image src={property.image} alt={`Property ${property.id}`} className="w-full h-40 object-cover mb-4" />
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 mt-4 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.184" height="11.456" viewBox="0 0 17.184 11.456"><path id="Icon_ionic-md-bed" data-name="Icon ionic-md-bed" d="M9.185,15.108A2.292,2.292,0,1,0,6.84,12.817,2.316,2.316,0,0,0,9.185,15.108Zm9.375-4.582H12.309v5.348H6.062V9H4.5V20.456H6.062V18.165H20.122v2.291h1.562V13.582A3.09,3.09,0,0,0,18.561,10.526Z" transform="translate(-4.5 -9)" fill="#fff"></path></svg>
                    </div>
                    <h2 className="text-white dark:text-white text-base font-medium mt-3">{property.category}</h2>
                    <span className={`bg-${property.status === 'For Sale' ? 'green' : 'red'}-100 text-${property.status === 'For Sale' ? 'green' : 'red'}-800 text-xs font-medium me-2 px-2.5 py-0.5 ml-1 mt-3 rounded-full dark:bg-${property.status === 'For Sale' ? 'green' : 'red'}-900 dark:text-${property.status === 'For Sale' ? 'green' : 'red'}-300`}>{property.status}</span>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">{property.description}</p>
                    <a href="#" className={`mt-3 text-gray-300 dark:text-white hover:text-blue-600 inline-flex items-center`}>
                    Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="#" className={`bg-${property.status === 'For Sale' ? 'green' : 'yellow'}-500 hover:bg-${property.status === 'For Sale' ? 'green' : 'yellow'}-400 text-white px-4 py-2 mt-2 inline-block mt-4 rounded`}>
                    ${property.price}&nbsp;- <i>Add to Cart</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
