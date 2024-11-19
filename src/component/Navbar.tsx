"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";


const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 768) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full ${
        scrolled 
          ? "bg-[#FF8000]  text-[#163020] z-50  "
          : "text-[#FF8000]"
      }`}
    >
      <div className=" flex justify-around items-center  py-5 px-6 xs:flex-col sm:flex-row">
        <div className="xs:flex xs:justify-around sm:none xs:w-full lg:w-auto ">
          <div className="text-3xl font-relway font-extrabold">S.S Blogs</div>

          <div className="xs:flex justify-center items-center sm:hidden text-[24px]">
            <button onClick={handleClick} type="button">
              {" "}
             {isMenu?<FaX/>:<FaBars />} 
            </button>
          </div>
        </div>
        <nav
          className={` ${
            isMenu ? "xs:flex xs:flex-col mt-6 bg-[#FF8000] opacity-85 text-[#163020] z-40 w-full py-10" : "xs:hidden"
          } gap-x-5 text-[20px] sm:flex-row  sm:flex justify-center items-center font-relway font-medium `}
        >
          <Link
            href={"/"}
            className="hover:mt-[-10px] transition-all 0.3s ease-in"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="hover:mt-[-10px] transition-all 0.3s ease-in"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="hover:mt-[-10px] transition-all 0.3s ease-in"
          >
            Blog
          </Link>
          <Link
            href={"/"}
            className="hover:mt-[-10px] transition-all 0.3s ease-in"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
