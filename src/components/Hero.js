import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import hero from "../../public/hero.svg";
import downhero from "../../public/downhero.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-black">
            Make The Best Financial Decisions
          </h1>
          <p className="text-gray-500 tracking-widest">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 hover:bg-primary border-none bg-black text-white">
              Get Started <BsArrowRight className="text-xl" />
            </button>
            <div className="flex gap-3 cursor-pointer items-center">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl font-medium">Watch</p>
            </div>
          </div>
          <Image className="h-[350px]" src={downhero} alt="" />
        </div>
        <Image src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
