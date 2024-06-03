import React from "react";
import logo from "../../public/logo.svg";
import email from "../../public/email.svg";
import phone from "../../public/phone.svg";
import Image from "next/image";

const FooterItem = ({ title, links }) => (
  <div className="flex flex-col gap-4 items-start">
    <p className="text-4xl font-semibold">{title}</p>
    {links.map((link, index) => (
      <p key={index} className="text-xl font-medium">
        {link}
      </p>
    ))}
  </div>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex gap-2 items-start">
    <Image src={icon} alt="" />
    <p className="text-lg font-medium">{text}</p>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-[#fdfdfd]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10">
        <div className="flex flex-col gap-4 items-start">
          <Image className="h-10" src={logo} alt="Logo" />
          <ContactInfo icon={email} text="help@rownok.com" />
          <ContactInfo icon={phone} text="+88018763646353" />
        </div>
        <FooterItem
          title="Links"
          links={["Home", "About", "Booking", "Blog"]}
        />
        <FooterItem
          title="Legal"
          links={["Terms Of Use", "Privacy Policy", "Cookie Policy", "Blog"]}
        />
        <FooterItem
          title="Product"
          links={["Take Tour", "Live Chat", "Reviews"]}
        />
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold">News Letter</p>
          <p className="text-xl font-medium">Stay Up To Date</p>
          <div className="flex items-start flex-col gap-2">
            <input
              type="text"
              className="px-3 py-3 bg-white"
              placeholder="Your email"
            />
            <button className="bg-black w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
