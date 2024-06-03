import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons for menu toggle

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mt-8">
      <div className="container mx-auto py-2 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <button
            className="text-gray-800 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div
          className={`flex-col lg:flex-row lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          } w-full lg:w-auto  lg:items-center gap-10 lg:gap-7 mt-4 lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row gap-7 items-center">
            <NavLink
              href="/"
              text="Home"
              additionalClasses="text-primary font-semibold"
            />
            <NavLink href="/about" text="About" />
            <NavLink href="/pricing" text="Pricing" />
            <NavLink href="/features" text="Features" />
            <button className="bg-black text-white btn btn-active rounded-none hover:bg-primary border-none lg:hidden mt-4">
              Download Now
            </button>
          </div>
        </div>
        <button className="bg-black text-white btn btn-active rounded-none hover:bg-primary border-none hidden lg:block">
          Download Now
        </button>
      </div>
    </div>
  );
};

const NavLink = ({ href, text, additionalClasses = "" }) => (
  <Link
    href={href}
    className={`text-gray-800 font-medium text-lg ${additionalClasses}`}
  >
    {text}
  </Link>
);

export default NavBar;
