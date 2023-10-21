import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="bg-gradient-to-r w-screen aspect-video  from-black  pt-[15%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6  text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-lg  px-12 p-4 text-black rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-600 text-lg mx-2 px-12 p-4 text-white bg-opacity-40 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

