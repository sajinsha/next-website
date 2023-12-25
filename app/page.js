import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import Contents from "@/components/Contents";

export default function Home() {
  return (
    <>
    {/* // <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Header/>
      <HeroSection/>
      <Slider/>
      <Contents/>
      <Categories/>
      <Testimonial/>
      <Footer/>
    {/* // </main> */}
    </>
  );
}
