import React from "react";
import Image from "next/image";
import Group from "./Group.png";

const Testimonial = () => {
  return (
    <>
      <section class="bg-blue-50 body-font">
        <div class="container px-5 py-24 mx-auto">
          {/* <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            The Canadian Home
          </h1> */}
          <h1
            class="text-3xl title-font text-gray-900 mb-12 text-center 
            color-black font-barlow text-25 font-bold line-normal"
          >
            The Canadian Home
          </h1>
          <h1
            class="text-1xl title-font text-gray-900 mb-12 text-center 
            color-black font-barlow text-25 font-bold line-normal"
          >
            What customers say about the The Canadian Home experience
          </h1>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 w-full">
              <div class="h-full bg-gray-100 p-8 rounded border border-blue-500">
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
                  <span class="title-font font-medium text-gray-900">
                    UI DEVELOPER
                  </span>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 w-full">
              <div class="h-full bg-gray-100 p-8 rounded border border-blue-500">
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
                  <span class="title-font font-medium text-gray-900">
                    UI DEVELOPER
                  </span>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3 w-full">
              <div class="h-full bg-gray-100 p-8 rounded border border-blue-500">
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
                  <span class="title-font font-medium text-gray-900">
                    UI DEVELOPER
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <Image src={Group} alt="dots" height={50} width={50} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
