import React from "react";
import Image from "next/image";
import Cat1 from "./Cat1.png";
import Cat2 from "./Cat2.png";
import Cat3 from "./Cat3.png";
import Cat4 from "./Cat4.png";
import Cat5 from "./Cat5.webp";

const Categories = () => {
  return (
    <div className="mt-10">
    <div className='text-center'>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">List of <span class="text-blue-600 dark:text-blue-500">Features</span>.</h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-500">Find the best MLS listings and Real Estate properties in Canada</p>
      </div>
      <section class="text-gray-600 body-font bg-white-500 categories">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 sm:flex max-sm:flex-wrap">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat4} alt="CatOne" height={275} width={261} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                  Visibility
                </h2>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  Your house will appear as a ‘featured listing’ on the home
                </p>

                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  page,ensuring your house gets the maxiumum visibility
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  needed by our business.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat3} alt="Cat3" height={275} width={310} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                  Real Local Agents
                </h2>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  You are backed by a team of Real estate agents who know
                </p>

                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  the market in and out.With their market insights,
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  experience and sound data,your home will sell in no time
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat2} alt="Cat2" height={275} width={259} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                  Email & Notification
                </h2>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  Users get instant notification about new listings,price
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  hikes,price drops and neighborhood alerts.We get your
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  property show to people who are actively looking and
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  eager to buy.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat5} alt="Cat1" height={230} width={230.5} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                  Professional Advice
                </h2>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  With opinions or recommendations offered as a guide to housing,
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  we make choices reach the best of its abilities because 'advise'
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  is what we sell.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat1} alt="Cat1" height={275} width={306} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                  Professional Photos
                </h2>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  With professional staging and photos, we make your house
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  reach the best of its abilities and show it off because looks
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  are what sell.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat4} alt="CatOne" height={275} width={261} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                  Mobility
                </h2>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  Your house will appear as a ‘featured listing’ on the app,
                </p>

                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  ensuring your house gets listed and viewed
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                  for smartphone users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
