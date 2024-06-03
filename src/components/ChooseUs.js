import React from "react";
import bell from "../../public/Bell.svg";
import choose from "../../public/chose.png";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5">
          <p className="uppercase tracking-widest text-primary font-medium text-lg">Advantage</p>
          <p className="text-5xl font-black">Why Choose Uifry?</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src={bell} alt="Bell Icon" width={24} height={24} />
              <p className="text-3xl font-semibold">Clever Notifications</p>
            </div>
            <p className="text-gray-500 text-lg">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <Image src={choose} alt="Choose Us" width={500} height={500} />
      </div>
    </div>
  );
};

export default ChooseUs;
