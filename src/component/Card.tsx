import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";


interface ICard {
  heading:string,
  shortDescription:string,
  imagePath:string,
  id:number
}




const Card = ({ heading, shortDescription, imagePath , id }:ICard) => {
  return (
    <div className="w-auto h-[600px]  border-[#163020] border-[4px]  rounded-xl flex flex-col justify-center items-center gap-3 text-black font-relway max-w-md p-10">
      <h2 className="text-xl font-medium text-center">{heading}</h2>
      <Image
        src={imagePath}
        alt="image"
        width={200}
        height={200}
        className="w-[340px] h-[300px] border-[#163020] border-[1px]  rounded-xl object-cover object-center"
      />

      <p className="text-center text-lg ">{shortDescription}</p>
      <Button className="bg-[#163020] hover:bg-[#FF8000]">
        <Link href={`/${id}`}>Read More</Link>
      </Button>
    </div>
  );
};

export default Card;
