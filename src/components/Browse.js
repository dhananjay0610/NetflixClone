import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";
import { BG_IMG } from "../utils/constants";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();

  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />      
      <div className="absolute -z-20">
        <img
          className="w-screen h-auto"
          alt="logo"
          src={BG_IMG} />
      </div>

      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
