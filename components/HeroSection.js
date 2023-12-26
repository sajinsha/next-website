import Image from "next/image";
import BannerImage from "./Banner.png";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 container-fluid">
      <div className="hero-content text-center mt-4">
        <div className="container items-center mb-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-700 md:text-4xl lg:text-5xl dark:text-gray-700">
            <span className="text-blue-600 dark:text-blue-500">Thinking</span> of selling your House
            <span className="text-blue-600 dark:text-blue-500">?</span>
          </h1>
          <div className="text-center hero-text">
            <p className="text-slate-700 whitespace-wrap">
              Get an instant estimate of your home's value. You can quickly
              determine the estimated value of
            </p>
            <p className="text-slate-700 whitespace-wrap">
              your home by answering a few questions.
            </p>
          </div>

          <div className="mt-6 md:mt-8 mb-4 mx-auto">
            <input
              type="text"
              placeholder="Enter your address.."
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>

          <button className="btn text-white bg-blue-500 rounded-full px-4 hover:bg-blue-400 hover:text-black active:text-white">
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
