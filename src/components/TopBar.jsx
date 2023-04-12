import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const TopBar = () => {
  return (
    <div>
      <div className="h-[70px] gap-2 bg-[#242526]  flex w-[100vw] justify-between md:w-full items-center px-4 fixed">
        <p className="text-white text-2xl lg:text-3xl font-bold">facebook</p>
        <div className="w-[8%] sm:w-[43%] bg-[#3a3b3c] rounded-lg h-10 flex justify-center items-center">
          <BsSearch className="text-white pl-2" size={20} />
          <input
            className="h-10 rounded-lg w-[100%] pl-2 bg-[#3a3b3c] border-0"
            type="text"
            placeholder="  Search Facebook"
          />
        </div>

        <div className="flex gap-1 md:gap-4">
          <div className="h-10 w-10 rounded-[50%] bg-[#3a3b3c] flex justify-center items-center">
            <AiOutlineMessage className="text-white" />
          </div>
          <div className="h-10 w-10 rounded-[50%] bg-[#3a3b3c] flex justify-center items-center">
            <IoIosNotificationsOutline className="text-white" />
          </div>
          <div className="h-10 w-10 rounded-[50%] bg-white flex justify-center items-center overflow-hidden">
            <img className="w-[100%]" src="./Assets/picture.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
