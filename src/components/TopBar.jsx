import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {IoIosNotificationsOutline} from 'react-icons/io'

const TopBar = () => {
  return (
    <div>

        <div className='h-[70px] gap-2 bg-black  flex w-[100vw] justify-between md:w-full items-center'>
            <p className='text-white text-2xl lg:text-5xl font-bold'>facebook</p>
            <div className='border w-[8%] md:w-[20%] lg:w-[50%] bg-white rounded-lg h-10 flex justify-center items-center'>
                <BsSearch/>
                <input className='h-10 rounded-lg w-[97%]' type="text" placeholder="  Search Facebook" />
            </div>

            <div className='flex gap-1 md:gap-4'>
                <div className='h-10 w-10 rounded-[50%] bg-white flex justify-center items-center' >
                    <AiOutlineMessage/>

                </div>
                <div className='h-10 w-10 rounded-[50%] bg-white flex justify-center items-center'>
                    <IoIosNotificationsOutline/>

                </div>
                <div className='h-10 w-10 rounded-[50%] bg-white flex justify-center items-center overflow-hidden'>
                    <img className='w-[100%]' src="./Assets/picture.jpg" alt=""/>

                </div>
            </div>


        </div>
    </div>
  )
}

export default TopBar