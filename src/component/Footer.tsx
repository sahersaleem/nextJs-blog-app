import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full h-[40vh] bg-[#ff8000f0] bg-opacity-50 backdrop-blur-md flex justify-around xs:px-6 lf:px-0 lg:items-center xs:flex-col lg:flex-row' >
      <div className='flex flex-col text-[#163020] font-medium  '>
        <Link href={"/"} className="hover:underline">Home</Link>
        <Link href={"/"} className="hover:underline">About</Link>
        <Link href={"/"} className="hover:underline">Blog</Link>
        <Link href={"/"} className="hover:underline">Contact Us</Link>
      </div>
      <div className='text-xl flex gap-x-2 text-[#163020]'>
      <FaFacebookSquare/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
      </div>
      <div className='font-relway'>
        All Right Reserved @SaherSaleem
      </div>
    </div>
  )
}

export default Footer
