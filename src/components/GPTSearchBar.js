import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[13%] flex justify-center">
      <form className=" bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder="GPT Search"
        ></input>
        <button className="px-4 py-2 m-4 bg-red-400 text-white rounded-lg col-span-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
