import React from "react";

const FaqItem = ({ bgColor, textColor }) => (
  <div className={`flex flex-col gap-2 px-6 py-6 rounded-lg ${bgColor}`}>
    <p className={`text-xl font-bold ${textColor}`}>
      The Best Financial Accounting <br /> App Ever!
    </p>
    <p className={`text-lg ${textColor}`}>
      Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
      Ultricies. In Ultrices Malesuada Elit Mauris.
    </p>
  </div>
);

const Faq = () => {
  return (
    <div className="container mx-auto lg:px-32">
      <p className="text-primary font-medium text-lg">Faq</p>
      <p className="text-4xl font-extrabold py-4">Frequently Asked Questions</p>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10 gap-10">
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <FaqItem bgColor="bg-primary" textColor="text-white" />
        </div>
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <FaqItem bgColor="" textColor="text-black" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10 gap-10">
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <FaqItem bgColor="" textColor="text-black" />
        </div>
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <FaqItem bgColor="bg-primary" textColor="text-white" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10 gap-10">
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <FaqItem bgColor="bg-primary" textColor="text-white" />
        </div>
        <div className="flex flex-col gap-5 items-start w-full lg:w-1/2">
          <FaqItem bgColor="" textColor="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
