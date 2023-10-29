import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-20 ">
        <img className=" h-screen object-cover md:h-auto md:w-screen" alt="logo" src={BG_IMG} />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearchPage;
