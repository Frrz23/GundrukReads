import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Logo from "../../assets/Images/logo/logo5.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-mono mt-10 p-6 max-w-full  bg-gray-50 shadow-md " >
      <div className=" flex justify-between  w-full  ">
      <div>
      <img src={Logo} alt="GundrukReads" className="h-36 mb-4  " />
      </div> 
      <div className="flex space-x-14 ">
        <div className="flex flex-col ">
        <p className="font-bold text-[22px]  mb-2">About</p>
        <div className="flex flex-col space-y-2 text-[13px] pl-0.5">
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">Our Mission</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Blog</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Vision</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Team</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Achievents & Awards</a>
        </div>
        </div>
        <div className="flex flex-col ">
        <p className="font-bold text-[22px]  mb-2">Follow Us</p>
        <div className="flex flex-col space-y-2 text-[13px] pl-0.5">
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">Facebook</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Instagram</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Twitter</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Linkdin</a>
        </div>
        </div>
        <div className="flex flex-col ">
        <p className="font-bold text-[22px]  mb-2">Service</p>
        <div className="flex flex-col space-y-2 text-[13px] pl-0.5">
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">FAQ</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Chat With Us</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Payment</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Order</a>
        </div>
        </div>
        <div className="flex flex-col ">
        <p className="font-bold text-[22px]  mb-2">Legal</p>
        <div className="flex flex-col space-y-2 text-[13px] pl-0.5">
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500 ">Terms & Conditions</a>
        <a href="#"to="/gundrukreads-Motto" className="no-underline  text-slate-700 hover:underline hover:text-red-500">Privacy Policy</a>

        </div>
        </div>
      </div>
      </div>
      <div className=" border-t border-gray-600 pt-7  text-center text-[15px] space-y-0.5 mt-2">
        <p className="-mb-4">&copy; 2024 GundrukReads. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
