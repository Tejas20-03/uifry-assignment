import React from "react";
import subhero from "../../public/subhero.svg";
import budget from "../../public/Budget.svg";
import b2 from "../../public/b2.svg";
import b3 from "../../public/b3.svg";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image src={subhero} alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-primary font-medium text-lg items-start">
            Features
          </p>
          <p className="text-4xl font-bold items-start">Uifry Premium</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src={budget} alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="text-gray-500 text-lg">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src={b2} alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="text-gray-500 text-lg">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src={b3} alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p className="text-gray-500 text-lg">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
