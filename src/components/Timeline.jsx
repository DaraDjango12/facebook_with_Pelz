import React from "react";
import { GiWorld } from "react-icons/gi";
import { BsShare } from "react-icons/bs";
import {BiCommentAdd } from "react-icons/bi";
import { GoThumbsup } from "react-icons/go";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

const Timeline = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="rounded-[50%] overflow-hidden w-8 h-8">
            <img className="w-8 h-8" src="./Assets/picture.jpg" alt="" />
          </div>
          <div>
            <p>Gabriel Lloyd Seven Attah</p>
            <div className="flex gap-2">
              <small>6h</small>
              <GiWorld />
            </div>
            <p>Hustle must pay but no be overNight.</p>
            httt:www.facebook.com
          </div>
        </div>

        <div className="flex gap-2">
          <GiWorld />
          <AiOutlineClose />
        </div>
      </div>
      <div className="w-[500px] h-[600px]">
        <img
          className="w-[500px] h-[500px]"
          src="./Assets/picture.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex">
            <AiOutlineHeart />
            <GoThumbsup />
          </div>
          <p className="text-sm"> Gabriel Loyd Seven Attah and 18 others</p>
        </div>
        <div>
          <small>2 comments</small>
        </div>
      </div>
      <hr />


      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-around items-center">
        <GoThumbsup />

          <p>
            Like
          </p>

        </div>

        <div className="flex gap-2 items-center">

          <BiCommentAdd/>

          <p>Comment</p>

        </div>

        <div className="flex gap-2 items-center">

          <BsShare/>

          <p>Share</p>

        </div>


      </div>
      <hr />
      






    </div>
  );
};

export default Timeline;
