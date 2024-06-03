import React from "react";
import customize from "../../public/customize.png";
import customizeIcon from "../../public/customizeicon.svg";
import Image from "next/image";

function Customize() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image src={customize} />
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src={customizeIcon} />
              <p className="text-2xl font-semibold">Fully Customizable</p>
            </div>
            <p className="text-gray-500 text-xl">
              rcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis{" "}
              <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
              Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;
