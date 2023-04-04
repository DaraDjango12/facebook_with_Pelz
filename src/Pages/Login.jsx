import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#f0f2f5] h-screen '>
      <div className='justify-center pt-14 mx-[50px]'>
        <h3 className='text-[#1877f2] text-5xl text-center font-bold' >facebook</h3>
      </div>

      <div className='bg-white mx-[50px] h-[350px] mt-6 rounded-md md:mx-[480px] flex flex-col gap-4 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <h3 className='text-center text-xl mt-2'>Log in to Facebook</h3>
        <input className='bg-white border px-4 py-[12px] rounded mt-2' type="text" placeholder='Email address or phone number' />
        <input className='bg-white border px-4 py-[12px] rounded mt-2' type="password" placeholder='Password'/>
        <button className='bg-[#1877f2] px-4 py-[12px] rounded text-white font-bold text-xl'>Log in</button>

        <p className='text-center text-[#1877f2]'>Forgotten password?</p>
      </div>
      
    </div>
  )
}

export default Login
