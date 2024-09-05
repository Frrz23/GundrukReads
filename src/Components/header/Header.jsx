import react from 'react';
import { FiSearch,FiShoppingCart,FiHeart } from "react-icons/fi";
import Logo from "../../assets/Images/logo/logo5.png";
import { NavLink } from 'react-router-dom';

const Header=()=>{
    return(
        <>
       <header className="font-poppins flex items-center justify-evenly  pb-4 pt-2 bg-white-200">
        <div className="flex itmes-center">
       <NavLink to="/">
       <img src={Logo} alt="logo" className="w-full h-20 "/>
       </NavLink>
        </div>
        <div className="flex items-center justify-center w-2/5 relative">
          <input
            type="text"
            placeholder="I'm searching for"
            className="text-gray border border-gray-300 w-full py-2 px-2 pr-8 focus:outline-none"
          />
          <button className="absolute top-0 right-0 flex items-center justify-center h-full w-20 bg-red-500">
            <FiSearch className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="flex items-center ml-2">
          <div className="flex items-center">
            <FiHeart className="h-6 w-6 text-gray-700" />
            <span className="ml-1 text-gray-500 pr-3">Wishlist</span>
          </div>
          <div className="ml-4">
            <div className="relative">
              <FiShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 
              text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2
               bg-red-500 rounded-all ">0</span>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}
export default Header;