import React from "react";
import Bookstore from "../../assets/Images/img/Contact.png";
import { IoMdContacts } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import '../../../src/style.css';


const Contactus = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src={Bookstore}
          alt="Bookstore"
          className="w-[80rem] h-full pl-1"
        />
      </div>
      <div className="grid grid-cols-4 pl-48 pt-10 gap-10 mb-2 ">
        <div className="">
          <IoMdContacts size={85} className="text-[#4c6ed4]" />
        </div>
        <div>
          <FaWhatsapp size={85} className="text-[#369943]" /> 
        </div>
        <div>
          <MdEmail size={85} className="" /> 
        </div>
        <div>
          <SiGnuprivacyguard size={85} className="text-[#49c3d3]" /> 
        </div>
      </div>
      <div className="flex pl-40 gap-[13rem]  ">
        <div className="pt-2">
          <p className=" pl-7 text-contact">
            Product FAQ
          </p>
          <div className="pl-3">
          <button className="text-contact-button ">
            Find Answers
          </button>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-contact pl-9">
            WhatsApp
          </p>
          <div className="pl-2">
          <button className="text-contact-button">
            Click Here
          </button>
        </div>
        </div>
        <div className="pt-2">
          <p className="text-contact pl-[51px]">
            E-mail
          </p>
          <div className="pl-4">
          <button className="text-contact-button">
            Click Here
          </button>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-contact pl-3">
            Privacy Policy
          </p>
          <div className="pl-2">
          <NavLink to="/gundrukreads-policies" className="text-contact-button">
            Click Here
          </NavLink>
        </div>
        </div>
      </div>
        <div >
          <div className="flex flex-col items-center pt-20 text-lg font-bold">
            <BsFillTelephoneInboundFill  className="size-20 pr-2 mb-2 text-emerald-500 "  />
          <p>Wanna Chat With Customer</p>
          <p>Call +0145865752</p>
          <p>Monday-Friday:8am-5pm</p>
        </div>
        </div>
    </>
  );
};

export default Contactus;
