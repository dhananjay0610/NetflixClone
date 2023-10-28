import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const searchMovieInTMDB = async (gptMovies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie" +
        gptMovies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      " . Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Tarzan ";
    //Make api call to gptAPIs
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);

    //for each movies I will search tmdb api
    const data = gptMovies.map((m) => searchMovieInTMDB(m));
  };
  return (
    <div className="pt-[13%] flex justify-center">
      <form
        className=" bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder="GPT Search"
        ></input>
        <button
          className="px-4 py-2 m-4 bg-red-400 text-white rounded-lg col-span-4"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
