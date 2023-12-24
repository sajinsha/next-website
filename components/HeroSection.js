import Image from "next/image";
import BannerImage from "./BannerImage.jpg";

const HeroSection = () => {
  return (
      <div className="hero-content text-center mt-8">
      <div className="hero bg-base-200 container-fluid">
      <Image className="banner-img-1" src={BannerImage} alt="Banner Image" />
        <div className="container items-center mb-10">
          <h1 className="text-3xl font-bold mb-6 md:mb-8 lg:mb-10 whitespace-wrap">
            Thinking of selling your house?
          </h1>
          <div className="text-center ml-12">
            <p className="mr-10 text-slate-700 whitespace-wrap">
              Get an instant estimate of your home's value. You can quickly
              determine the estimated value of
            </p>
            <p className=" text-slate-700 whitespace-nowrap">
              Your home by answering a few questions.
            </p>
          </div>

          <div className="mt-6 md:mt-8 mb-4 mx-auto">
            <input
              type="text"
              placeholder="Enter your address..."
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>

          <button className="btn text-white bg-blue-500 rounded-full px-4 hover:bg-blue-500">
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
