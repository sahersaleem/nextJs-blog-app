import React from "react";
import { testimonials } from "./../data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const TestimonialCarosual = () => {
  return (
    <div>
      <Carousel className="xs:w-[230px] lg:w-[300px] ">
        <CarouselContent className="">
          {testimonials.map((item) => (
            <CarouselItem key={item.name} className="">
              <div className="border-[#163020] border-[3px] rounded-md p-6 xs:h-[400px] lg:h-auto flex flex-col justify-center items-center ">
                <Image
                  src={item.profileImage}
                  width={100}
                  height={100}
                  alt="testimanila"
                  className="w-[100px] h-[100px] object-cover object-center rounded-full border-[3px] border-[#163020]"
                />
                <h1 className="text-xl font-bold text-center mt-6">
                  {item.name}
                </h1>
                <p className="italic text-center">{item.testimonial}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="w-full h-auto bg-slate-200 border-[3px] flex justify-center flex-col gap-20 items-center pb-24">
      <h1 className="text-[#163020]  font-bold lg:text-5xl font-relway mt-12 xs:text-3xl text-center lg:text-left">
        Trusted By Adventurers World wide
      </h1>
      <TestimonialCarosual />
    </div>
  );
};

export default Testimonial;
