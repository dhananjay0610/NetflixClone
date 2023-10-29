import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="bg-gradient-to-r w-screen aspect-video  from-black  pt-[15%] px-6 md:px-24 absolute text-white">
      <h1 className="text-2xl md:text-6xl font-bold mt-5 md:mt-0" >{title}</h1>
      <p className="hidden md:inline-block py-6  text-lg w-1/4">{overview}</p>
      <div>
        <button className=" bg-white text-lg  px-3  md:px-12 py-1 md:py-4 text-black rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 text-lg mx-2 px-12 p-4 text-white bg-opacity-40 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
