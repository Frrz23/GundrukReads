import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Logo from "../../assets/Images/logo/logo5.png";

const Footer = () => {
  return (
    <footer className="font-poppins bg-gray-800 text-white p-6 mt-10 -mb-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-left">
      <div className="flex flex-col items-start mb-6 md:mb-0 relative -ml-10">
      <img src={Logo} alt="GundrukReads" className="h-24 w-auto mb-4 " />
          <p className="text-lg  text-gray-400">Your one-stop shop for all your manga needs.</p>
        </div>

        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 mt-10 mr-48 text-lg">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Shop</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About Us</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          <a href="#" className="hover:text-gray-300 transition-colors">FAQ</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 pt-7  md:mt-0 -mr-10">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiFacebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiTwitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiInstagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-300 transition-colors">
            <FiLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className=" border-t border-gray-600 pt-7  text-center text-sm space-y-1">
        <p>&copy; 2024 GundrukReads. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a> | 
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a> | 
          <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
