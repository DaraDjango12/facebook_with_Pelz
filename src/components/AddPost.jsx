import React from "react";
import { RiVideoUploadFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

const AddPost = () => {
  return (
    <div className="bg-[#242526] h-[130px] flex flex-col justify-center items-center rounded-md mt-6">
      {/* md:mx-[440px] */}
      <div className="flex text-white mx-4">
        <div
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph')",
          }}
          className=" bg-cover bg-center w-[45px] h-[40px] rounded-full bg-white text-black mr-2"
        ></div>
        <div className="w-[100%]">
          <input
            className="w-[400px] cursor-pointer rounded-full h-[40px] bg-[#3a3b3c] px-4 outline-none"
            placeholder="What's on your mind, Oluwapelumi?"
          />
        </div>
      </div>

      <hr className="w-[95%] m-4 bg-[#3a3b3c]" />
      {/* <div className="m-4 h-[1px] md:mt- md:mx-[px] mb- bg-[#3a3b3c]"></div> */}

      <div className="text-white flex justify-between gap-8">
        <span className="flex items-center gap-2 ">
          {" "}
          <RiVideoUploadFill size={25} className="text-[#f02849]" /> Live video
        </span>
        <span className="flex items-center gap-2">
          {" "}
          <IoMdPhotos size={25} className="text-[#45bd62]" /> Photo/video
        </span>
        <span className="flex items-center gap-2">
          {" "}
          <BsEmojiSmileFill size={25} className="text-[#f7b928]" />
          Feeling/activity
        </span>
      </div>
    </div>
  );
};

export default AddPost;
