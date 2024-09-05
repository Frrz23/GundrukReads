import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moreabout from'../../assets/Images/img/about.png'
import Detailsinfo from './Detailsinfo';


const Moreabout = () => {
   const [showmore,setshowmore]=useState(false);
    const HandleShow=()=>{
        setshowmore(!showmore);
    };
  return (
    <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2">
      <img src={moreabout} alt="Gamer Gaun" className='w-full h-full max-w-md object-contain animate-moveUpDown' />
      <div>
        <h2 className='mb-4 text-3xl font-bold leading-none sm:text-4xl'>
          <span className='mr-2'>TiTle</span>
          <span className='text-orange-500'>Subtitle</span>
        </h2>
        <p className='mb-4 text-gray-700'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi nihil facilis repudiandae, voluptatum fuga maxime sunt explicabo reprehenderit adipisci?          
        </p>
        <p className='mb-4 text-gray-700'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet laudantium excepturi sunt aut laborum reprehenderit consequatur labore sed autem.        <br />
        </p>
        <button
        className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-full no-underline" onClick={HandleShow}
        >About Company
        </button>
      </div>
    </div>
    {showmore?<Detailsinfo/>:""}
  </div>
  )
}

export default Moreabout