import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Testimonial from "@/component/Testimonial";
import ThirdSection from "@/component/ThirdSection";
import WhyChooseSection from "@/component/WhyChooseSection";

export default function Home() {
  return (
    <div className=" relative h-screen w-full bg-[url(/images/bg2.png)] bg-cover bg-center ">
      <div className="inset-0 absolute bg-black opacity-10 shadow-xl"></div>
        <div className="z-40 relative">
          <Navbar />
          <Hero />
          <ThirdSection/>
          <WhyChooseSection/>
          <Testimonial/>
          <Footer/>
        </div>
    
    </div>
  );
}
