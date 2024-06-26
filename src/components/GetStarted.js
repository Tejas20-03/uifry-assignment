import Image from "next/image";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import getStart from "../../public/getstarted.svg";
const GetStarted = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-black  py-5 lg:py-10">
        <div className="flex flex-col gap-4 pl-4 lg:pl-20">
          <p className="text-6xl font-black text-white">
            Ready To Get Started?
          </p>
          <p className="text-white">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
            Vulputate.
          </p>

          <button className="bg-white text-black btn w-48 border-none flex gap-2 items-center capitalize hover:bg-primary">
            Download App
            <AiFillApple className="text-xl" />
          </button>
        </div>
        <Image src={getStart} alt="" />
      </div>
    </div>
  );
};

export default GetStarted;
