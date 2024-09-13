import React from 'react'
import { Link } from 'react-router-dom';

const Commonpage = (props) => {
  return (
    <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h2 className='mb-4 text-3xl font-bold leading-none sm:text-4xl'>
          <span className='mr-2'>{props.title}</span>
          <span className='text-red-500'>{props.subTitle}</span>
        </h2>
        <p className='mb-4 text-gray-700'>
        {props.desc}            
        </p>
        <p className='mb-4 text-gray-700'>
        {props.desc1}  
        </p>
        <p className='mb-4 text-gray-700'>
        {props.desc2}  
        </p>
        <p className='mb-4 text-gray-700'>
        {props.desc3}  
        </p>
        <p className='mb-4 text-gray-700'>
        {props.desc4}  
        </p>
        <Link to={props.visit} className="inline-block py-2 px-4 text-black bg--500 bg-red-500 hover:bg-red-600 rounded-full no-underline">
          {props.btnAbout}
        </Link>
      </div>
      <img src={props.imageAbout} alt="Gamer Gaun" className='w-full h-full max-w-md object-contain animate-moveUpDown -mt-12' />
    </div>
  </div>
  
  )
}

export default Commonpage