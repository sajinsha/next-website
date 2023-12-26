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
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          List of <span className="text-blue-600 dark:text-blue-500">Features</span>.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-500">
          Find the best MLS listings and Real Estate properties in Canada
        </p>
      </div>
      <section className="text-gray-600 body-font bg-white-500 categories">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 sm:flex max-sm:flex-wrap">
            {/* Repeat this block for each category */}
            {[
              { image: Cat4, alt: "Visibility", height: 275, width: 261, content: [
                "Your house will appear as a ‘featured listing’ on the home",
                "page, ensuring your house gets the maximum visibility",
                "needed by our business.",
              ] },
              { image: Cat3, alt: "Real Local Agents", height: 275, width: 310, content: [
                "You are backed by a team of Real estate agents who know",
                "the market in and out.With their market insights,",
                "experience and sound data,your home will sell in no time.",
              ] },
              { image: Cat2, alt: "Email & Notification", height: 275, width: 259, content: [
                "Users get instant notification about new listings,price",
                "hikes,price drops and neighborhood alerts.We get your",
                "property show to people who are actively looking and",
                "eager to buy.",
              ] },
              { image: Cat5, alt: "Professional Advice", height: 230, width: 230.5, content: [
                " With recommendations offered as a guide to housing,",
                "we make choices reach the best of its abilities because 'advise'",
                "is what we sell.",
              ] },
              { image: Cat1, alt: "Professional Photos", height: 275, width: 306, content: [
                "With professional staging and photos, we make your house",
                "reach the best of its abilities and show it off because looks",
                "are what sell.",
              ] },
              { image: Cat4, alt: "Mobility", height: 275, width: 261, content: [
                "Your house will appear as a ‘featured listing’ on the app,",
                "ensuring your house gets listed and viewed",
                "for mobile/smartphone users.",
              ] },
              // Repeat for other categories...
            ].map((category, index) => (
              <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div>
                  <Image src={category.image} alt={category.alt} height={category.height} width={category.width} />
                </div>
                <div className="flex-grow my-9">
                  <h2 className="text-gray-800 text-lg title-font font-medium mb-3 dark:text-white">
                    {category.alt}
                  </h2>
                  {category.content.map((text, i) => (
                    <p key={i} className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis dark:text-gray-500">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
