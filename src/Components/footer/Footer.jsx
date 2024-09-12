import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Logo from "../../assets/Images/logo/logo9.png";
import { NavLink } from "react-router-dom";
import AppStore from "../../assets/Images/img/AppStore.png";
import GooglePay from "../../assets/Images/img/GooglePay.png";
import hand from "../../assets/Images/img/hand.png";

const Footer = () => {
  return (
    <footer className="font-mono mt-10 p-6  max-w-full  bg-gray-100 shadow-md border " >
      <div className="flex ">
      <div className=" flex justify-between  w-full  ">
      <div>
      <img src={Logo} alt="GundrukReads" className="h-36 mb-4 pl-16 " />
      <div className="flex space-x-6 mt-4    md:mt-0 pl-20">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiFacebook className="h-8 w-8" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiTwitter className="h-8 w-8" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiInstagram className="h-8 w-8" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiLinkedin className="h-8 w-8" />
          </a>
        </div>
      </div> 
      <div className="flex space-x-20 pr-20">
        <div className="flex flex-col ">
        <p className="font-bold text-[25px]  mb-2">Service</p>
        <div className="flex flex-col space-y-2 text-[17px] pl-0.5">
        <NavLink to="/gundrukreads-FAQ" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">FAQ</NavLink>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Contact Us</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Payment</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Order</a>
        </div>
        </div>
        <div className="flex flex-col ">
        <p className="font-bold text-[25px]  mb-2">Our Company</p>
        <div className="flex flex-col space-y-2 text-[17px] pl-0.5">
        <NavLink to="/Aboutus" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">About Us</NavLink>
        <NavLink to="/gundrukreads-conditions" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">Terms & Conditions</NavLink>
        <NavLink to="/gundrukreads-policies" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Privacy Policy</NavLink>
        </div>
        </div>
        {/* <div className="flex flex-col ">
        <p className="font-bold text-[22px]  mb-2">Follow Us</p>
        <div className="flex flex-col space-y-2 text-[13px] pl-0.5">
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">Facebook</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Instagram</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Twitter</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Linkdin</a>
        </div>
        </div> */}
      </div>
      </div>
            <img src={hand} alt="" className="h-[14rem]  "/>
            <div className="space-y-4 mr-[24px] mt-10">
            <h3 className="text-[15px] w-max">Download It Here</h3>
            <img src={GooglePay} alt="" className="h-12" />
            <img src={AppStore} alt="" className="h-12" />
      </div>
      </div>
      <div className=" border-t border-gray-600 pt-7  text-center text-[15px] space-y-0.5 mt-2">
        <p className="-mb-4">&copy; 2024 GundrukReads. All rights reserved.</p>
      
      </div>
    </footer>
  );
};

export default Footer;
