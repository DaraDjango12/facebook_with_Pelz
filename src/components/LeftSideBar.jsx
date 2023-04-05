import React from "react";
import {IoMdNotificationsOutline} from "react-icons/io"



import {AiOutlineUserSwitch,AiOutlineNotification,AiOutlineVideoCameraAdd,AiOutlineSearch} from "react-icons/ai"
import { Link } from "@mui/material";

const LeftSideBar = () => {
  return (
    <div className="pl-8 text-black w-[100%] sm:w-[40vw] md:w-[30vw] ">
      <div>
        <p className="font-semibold text-xl text-[black]">Sponsored</p>
        <div className="flex gap-8 h-[300px] items-center">
          <div className="w-[400px] h-[150px] overflow-hidden rounded-lg">
            <img
              className="w-[400px] h-[150px]"
              src="./Assets/picture.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className="font-semibold">Apply fast & easy in a few clicks</h4>
            <div>
              <small>proxify.io</small>
            </div>
          </div>
        </div>

        <div className="flex gap-4  items-center">
          <div className="rounded-lg overflow-hiddenw-[300px]">
            <img
              className="w-[300px] h-[200px]"
              src="./Assets/picture.jpg"
              alt="p"
            />
          </div>

          <div>
            <h4 className="font-semibold">New Launch Social Deals</h4>
            <small>ng.oraimo.com</small>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-2xl mt-4 font-semibold">Your Pages and profiles</h4>
        <div className="flex items-center gap-4 mt-2">
          <div className="rounded-[50%] w-12 h-12 overflow-hidden">
            <img className="w-12 h-12" src="./Assets/picture.jpg" alt="" />
          </div>
          <p className="font-semibold">Gifted hands empowerment foundation</p>
        </div>

        <div className="pl-4">
        <div className="flex gap-2 items-center mt-2">
          <div>
            <IoMdNotificationsOutline size="20"/>
          </div>
          <p>
            2 Notifiations

          </p>
        </div>


        <div className="flex gap-2 items-center mt-2">
          <div>
            <AiOutlineUserSwitch size="20"/>
          </div>
          <p>
            Switch into Page

          </p>
        </div>


        <div className="flex gap-2 items-center mt-2">
          <div>
            <AiOutlineNotification size="20"/>
          </div>
          <p>
            Create Promotion

          </p>
        </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-4">
          <h4 className="font-semibold ">Friend Requests</h4>
          <Link to="#" >See All</Link>
        </div>

        <div className="flex items-center gap-4">
        <div className="flex rounded-[50%] w-16 h-16 overflow-hidden">
            <img className="w-16 h-16" src="./Assets/picture.jpg" alt="" />
        </div>

          <div className="flex-1">
            <div className="flex justify-between">
            <h4>Khalifa Dripx</h4>
            <small className="text-slate-500 ">2d</small>
            </div>
            <div className="flex mt-2 justify-between gap-4">
            <button className=" bg-slate-400 w-full px-4 rounded-md">Confirm</button>
            <button className=" bg-slate-900 w-full p-4 rounded-md">Delete</button>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-4">
        <h4>Birthdays</h4>
        <div className="flex gap-2 justify-center items-center">
          <div className="h-8 w-8">
            <img className="h-8" src="./Assets/picture.jpg" alt="" />
          </div>

          <p>Alice Aondsoo and 6 others have their birthdays today</p>

        </div>
      </div>

      <div>
      
      <div className="flex justify-between" >
      <h4>Contacts</h4>

        <div className="flex gap-2">

        <AiOutlineVideoCameraAdd size='20'/>
        <AiOutlineSearch size='20'/>
        <AiOutlineSearch size="20"/>

        </div>

      </div>
      <div>
        <div>
        <div className="flex gap-4 mt-4 items-center">
          <div className="rounded-[50%] overflow-hidden">
            <img
              className="w-8 h-8"
              src="./Assets/picture.jpg"
              alt="p"
            />
          </div>

          <div>
            <h4 className="font-semibold">New Launch Soecial Deals</h4>
            <small>ng.oraimo.com</small>
          </div>
        </div>


        <div className="flex gap-4 mt-4 items-center">
          <div className="rounded-[50%] overflow-hidden">
            <img
              className="w-8 h-8"
              src="./Assets/picture.jpg"
              alt="p"
            />
          </div>

          <div>
            <h4 className="font-semibold">New Launch Soecial Deals</h4>
            
          </div>
        </div>
          
        </div>
        <div>
          icon
        </div>

      </div>

      </div>
    </div>
  );
};

export default LeftSideBar;
