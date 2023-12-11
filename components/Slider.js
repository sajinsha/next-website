import React from "react";
import Image from "next/image";
import Image7 from "./image7.png";
import Image8 from "./image8.png";
import Image9 from "./image9.png";
import Image10 from "./image10.png";
import Image11 from "./image11.png";
import Image12 from "./image12.png";
import Vector6 from "./VectorRight.png";
import Vector7 from "./Vector7.png";

const Slider = () => {
  return (
    <div className="bg-gray-200">
    <div className="container mx-auto flex flex-col items-center justify-center   py-5 my-10text-center">
      <h1 className="text-center text-2xl font-barlow text-black font-bold mb-10 py-3">
        Featured On
      </h1>

      <div className="flex items-center justify-center py-3">
        <Image src={Vector7} alt="Vector6" className="h-10 mx-10" />
        <Image
          src={Image11}
          alt="Image 1"
          className="w-48 h-16 flex-shrink-0 mx-5 mr-7"
        />
        <Image src={Image12} alt="Image 1" className="w-48 h-16 flex-shrink-0" />
        <Image
          src={Image9}
          alt="Image 2"
          className="w-48 h-16 object-cover mx-5 mr-4"
        />
        <Image
          src={Image10}
          alt="Image 3"
          className="w-58 h-23 object-cover mx-5 mr-4"
        />
        <Image
          src={Image7}
          alt="Image 4"
          className="w-55 h-16 object-cover mx-5 mr-4"
        />
        <Image
          src={Image8}
          alt="Image 5"
          className="w-48 h-16 object-cover mx-5 mr-4"
        />
        <Image src={Vector6} alt="Vector 7" className="h-10 mx-10" />
      </div>
    </div>
    </div>
  );
};

export default Slider;
