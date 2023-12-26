import React from "react";
import Image from "next/image";
import Group from "./Group.png";
import UI from "./ui-dev.png";

const Testimonial = () => {
  return (
    <div className="px-5 py-24">
      <section className="bg-blue-50 body-font testimonial">
        <div className="container px-5 py-24 mx-auto">
          <div className='text-center'>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Testimonials<span className="text-blue-600 dark:text-blue-500">.</span></h1>
            <p className="text-lg font-normal text-gray-200 lg:text-xl dark:text-gray-300">Quotes from Developers</p>
          </div>

          <div className="flex mt-7 flex-wrap -m-4">
            <div class="p-4 md:w-1/3 w-full">
              <div class="h-full bg-gray-100 p-8 rounded border border-blue-500 bg-gray-800 text-white dark:text-gray-600 dark:bg-gray-100">
                <div class="text-center mt-10">
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-7 pt-4">
                    The Canadian Home is absolutely amazing. It successfully
                    surpasses all the other apps
                  </p>
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">
                    in this area. Their Chat function is what has been missing
                    from online home search.
                  </p>
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">
                    The experts are always available with correct answers to
                    anything.
                  </p>
                </div>

                <div class="text-center py-3 mt-3">
                  <div className="text-start flex">
                  <Image src={UI} alt="Cat1" height={70} width={70} className="rounded-full p-0.5 bg-blue-500" />
                  <span class="title-font font-medium mt-5 ml-2">
                   UI DEVELOPER
                  </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 w-full">
              <div class="h-full bg-gray-100 p-8 rounded border border-blue-500 bg-gray-800 text-white dark:text-gray-600 dark:bg-gray-100">
                <div class="text-center mt-10">
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-7 pt-4">
                    The Canadian Home is absolutely amazing. It successfully
                    surpasses all the other apps
                  </p>
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">
                    in this area. Their Chat function is what has been missing
                    from online home search.
                  </p>
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">
                    The experts are always available with correct answers to
                    anything.
                  </p>
                </div>

                <div class="text-center py-3 mt-3">
                <div className="text-start flex">
                  <Image src={UI} alt="Cat1" height={70} width={70} className="rounded-full p-0.5 bg-blue-500" />
                  <span class="title-font font-medium mt-5 ml-2">
                   UI DEVELOPER
                  </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 w-full">
              <div class="h-full bg-gray-100 p-8 rounded border border-blue-500 bg-gray-800 text-white dark:text-gray-600 dark:bg-gray-100">
                <div class="text-center mt-10">
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-7 pt-4">
                    The Canadian Home is absolutely amazing. It successfully
                    surpasses all the other apps
                  </p>
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">
                    in this area. Their Chat function is what has been missing
                    from online home search.
                  </p>
                  <p class="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis mt-2">
                    The experts are always available with correct answers to
                    anything.
                  </p>
                </div>

                <div class="text-center py-3 mt-3">
                <div className="text-start flex">
                  <Image src={UI} alt="Cat1" height={70} width={70} className="rounded-full p-0.5 bg-blue-500" />
                  <span class="title-font font-medium mt-5 ml-2">
                   UI DEVELOPER
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <Image src={Group} alt="dots" height={50} width={50} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
