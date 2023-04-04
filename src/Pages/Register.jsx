import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Register = () => {
  return (
    <div className='flex justify-center items-center'>
        <div class=''>
        <div className='flex p-4'>
            <div>

            <p>Sign Up</p>
            <small>Its quick and easy</small>

          

            </div>
            <AiOutlineClose/>

        </div>
        <hr />
        </div>
        <div className='flex'>
          <input className='' placeholder='Firstname'/>
          <input placeholder='Surname'/>

        </div>
        <input type="text" placeholder='Mobile Number or email address' className='' />
        <input type="password" placeholder='New Password' className='' />

        <div></div>







    </div>
  )
}

export default Register