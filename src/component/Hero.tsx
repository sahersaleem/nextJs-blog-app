import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col -mt-14 xs:gap-3 lg:gap-6 h-[100vh] w-full xs:px-10 lg:px-0">
      <h1 className="text-white xs:text-3xl lg:text-5xl leading-10 font-relway font-bold xs:-mt-9 lg:mt-12">
        Explore the World, One Adventure at a Time
      </h1>
      <p className="text-white xs:text-lg lg:text-3xl lg:leading-8 font-relway font-semibold">
        {" "}
        Your ultimate guide to unforgettable destinations, travel tips, and
        hidden gems.
      </p>
      <div className="space-x-7 mt-7">
        <Button className="hover:bg-[#163020] bg-[#FF8000]">
          {" "}
          <Link href={`/`}>Subsribe now</Link>
        </Button>

        <Button className="hover:bg-[#163020] bg-[#FF8000]">
          <Link href={`/`}>Read Blog</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
