import React from "react";
import testimonial from "../../public/testimonial.png";
import person from "../../public/person.svg";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="container mx-auto">
      <p className="text-xl font-medium text-center py-2">Testimonials</p>
      <p className="text-center font-bold text-4xl">
        What Our Users <br /> Say About Us?
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image src={testimonial} alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-3xl font-semibold">
            The Best Financial Accounting <br /> App Ever!
          </p>
          <p className="text-base text-gray-600">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,{" "}
            <br />
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor{" "}
            <br />
            Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
          <p className="text font-bold text-xl">Nick Jonas</p>
          <Image className="h-10" src={person} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
