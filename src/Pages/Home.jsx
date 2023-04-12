import React from "react";
import TopBar from "../components/TopBar"
import RightSideBar from "../components/RightSideBar"
import AddPost from "../components/AddPost"
import Timeline from "../components/Timeline"
import LeftSideBar from "../components/LeftSideBar"


const Home = () => {
  return (
    <div className="bg-[#18191a]">
      <TopBar />
      <div className="flex justify-between pt-[70px]">
        <RightSideBar />
        <div className="flex flex-col gap-4">
          <AddPost />
          <Timeline />
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Home;
