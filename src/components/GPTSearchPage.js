import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img className="w-screen h-auto" alt="logo" src={BG_IMG} />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
