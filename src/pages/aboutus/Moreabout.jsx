import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moreabout from'../../assets/Images/logo/logo6.png'
import Detailsinfo from './Detailsinfo';


const Moreabout = () => {
   const [showmore,setshowmore]=useState(false);
    const HandleShow=()=>{
        setshowmore(!showmore);
    };
  return (
    <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2">
      <img src={moreabout} alt="Gamer Gaun" className='w-full h-full max-w-md object-contain animate-moveUpDown -mt-5' />
      <div>
        <h2 className='mb-4 text-3xl font-bold leading-none sm:text-4xl'>
          <span className='mr-2'>Our</span>
          <span className='text-red-500'>Mission</span>
        </h2>
        <p className='mb-4 text-gray-700'>
        At GundrukReads, our mission is to make manga accessible to everyone, everywhere. We strive to provide a wide variety of manga titles, ranging from beloved classics to the newest releases, ensuring that readers of all interests and backgrounds can find something they love. By creating a user-friendly platform with secure payments and reliable delivery, we are dedicated to making the shopping experience seamless and enjoyable for every manga enthusiast.        </p>
        <p className='mb-4 text-gray-700'>
        We are committed to fostering a vibrant manga community where fans can connect, discover, and share their passion for storytelling. At GundrukReads, we believe in the power of stories to inspire and entertain, and we aim to be the go-to destination for manga lovers by continuously improving our service, expanding our catalog, and prioritizing customer satisfaction.        </p>
        <button
        className="inline-block py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-full no-underline" onClick={HandleShow}
        >About Company
        </button>
      </div>
    </div>
    {showmore?<Detailsinfo/>:""}
  </div>
  )
}

export default Moreabout