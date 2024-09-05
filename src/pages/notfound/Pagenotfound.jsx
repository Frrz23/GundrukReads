import React from 'react'
import notfound from '../../assets/Images/img/notfound.png'
import { Link } from "react-router-dom";


const Pagenotfound = () => {
    return (
        <>
          <div className="flex flex-col items-center justify-center h-screen font-poppins">
            <img src={notfound} alt="not foundImg" className="max-w-full" />
            <Link
              to="/"
              className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-sm no-underline mt-4"
            >
              Back to home
            </Link>
          </div>
        </>
      );
    };

export default Pagenotfound