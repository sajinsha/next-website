import React from "react";
import Image from "next/image";
import Cat1 from "./Cat1.png";
import Cat2 from "./Cat2.png";
import Cat3 from "./Cat3.png";
import Cat4 from "./Cat4.png";

const Categories = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-white-500">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat4} alt="CatOne" height={275} width={261} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Visibility
                </h2>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Your house will appear as a ‘featured listing’ on the home
                </p>

                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  page,ensuring your house gets the maxiumum Visibility
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat3} alt="Cat3" height={275} width={310} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Real Local Agents
                </h2>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  You are backed by a team of Real estate agents who know
                </p>

                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  the market in and out.With their market insights,
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  experience and sound data,your home will sell in no time
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat2} alt="Cat2" height={275} width={259} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Email & Notification
                </h2>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Users get instant notification about new listings,price
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  hikes,price drops and neighborhood alerts.We get your
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  property show to people who are actively looking and
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  eager to buy.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div>
                <Image src={Cat1} alt="Cat1" height={275} width={306} />
              </div>
              <div class="flex-grow my-9">
                <h2 class="text-gray-800 text-lg title-font font-medium mb-3">
                  Professional Photos
                </h2>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  With professional staging and photos, we make your house
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  reach the best of its abilities and show it off because looks
                </p>
                <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                  are what sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
