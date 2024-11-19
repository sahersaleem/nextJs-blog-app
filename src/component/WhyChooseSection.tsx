import React from "react";
import Image from "next/image";




interface IFeaturesCard {
  imgUrl :string,
   heading:string,
   para:string
}
const FeaturesCard = ({imgUrl , heading,para}:IFeaturesCard) => {
  return (
    <div className="max-w-sm w-[300px] flex justify-center items-center flex-col border-[3px]  hover:border-green-400 p-6 transition-all 0.3s ease-in-out hover:animate-pulse">
      <Image src={imgUrl} width={200} height={100} alt="image" className="w-[200px]  h-[200px] object-cover object-center"/>

      <div className="text-center mt-6">
        <h1 className="font-bold">{heading}</h1>
        <p className="text-center">{para}</p>
      </div>
    </div>
  )
}







const WhyChooseSection = () => {
  return (
    <div className=" relative xs:h-auto xs:pb-16 lg:pb-0 lg:h-screen w-full bg-[url(/images/image.png)] bg-cover bg-center text-white font-relway  ">
      <div className="inset-0 absolute bg-[#163020] opacity-95 shadow-xl "></div>
      <div className="relative z-30 flex justify-center flex-col gap-16 ">
        <div className="xs:space-y-7 lg:space-x-0 ">
          <h1 className=" xs:text-3xl lg:text-5xl text-[#FF8000] font-bold mt-20 text-center leading-normal">
          Where Wanderlust Meets Expertise
          </h1>
          <p className="text-[#FF8000]  text-center  text-xl italic font-medium">
            Discover handpicked guides and insider tips to make every trip
            unforgettable
          </p>
        </div>
        <div className="flex justify-center items-center xs:flex-col lg:flex-row xs:gap-y-10 lg:gap-x-14 ">
          <FeaturesCard imgUrl={'/images/iconiclandmarks.png'} heading={'Visual Inspiration'} para={'We hand-select the best travel experiences tailored to your interests, from tranquil retreats to adrenaline-filled adventures'} />
          <FeaturesCard imgUrl={'/images/tropicalParadise.png'} heading={'Curated for you'} para={'We hand-select the best travel experiences tailored to your interests, from tranquil retreats to adrenaline-filled adventures'}/>
          <FeaturesCard imgUrl={'/images/travelPlanning.png'} heading={'Travel Smarter'} para={'Packed with budget-friendly hacks, expert itineraries, and insider secrets, we’re here to save you time and money'}/>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
