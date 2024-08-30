import React from 'react'
import { NavLink } from "react-router-dom";
import '../../../../src/style.css';


const Register = () => {
  return (
    <>
     <div className="font-poppins w-[35rem] mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2 ">
        <h1 className='text-center pb-3 mx-auto'>Register</h1>
        <form action="" className='flex flex-col w-full'>
          <div className='flex flex-col w-[28rem] mx-auto space-y-4 font-poppins'>

          <label htmlFor="FirstName" className='label-field'>FirstName</label>
          <input type="text" id="FirstName" name="FirstName"className='input-field' placeholder='Enter Your FirstName' required/>

          <label htmlFor="LastName"className='label-field' >LastName</label>
          <input type="text" id="LastName" name="LastName" className='input-field'placeholder='Enter Your LastName' required/>
          
          <label htmlFor="Phone"className='label-field'>Phone</label>
          <input type="number" id="Phone" name="Phone" className='input-field' placeholder='Enter Your Phone' required/>
          
          <label htmlFor="Address"className='label-field'>Address</label>
          <input type="text" id="Address" name="Address" className='input-field' placeholder='Enter Your Address' required/>
          
          <label htmlFor="Email"className='label-field'>Email</label>
          <input type="email" id="Email" name="Email" className='input-field' placeholder='Enter Your Email' required/>
          
          <label htmlFor="Password"className='label-field'>Password</label>
          <input type="password" id="Password" name="Password" className='input-field' placeholder='Enter Your Password' required/>
          </div>
          <button className='mt-4 w-[28rem] mx-auto bg-green-800 p-2 rounded-md text-lg font-bold  hover:text-[19px]'>
            Submit
          </button>
        </form>

     </div>
    </>
  )
}

export default Register