import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, MovieName } = gpt;

  if (!MovieName) return null;

  return (
    <div className="p-4 mt-4 bg-black text-white bg-opacity-90">
      <div>
        {MovieName.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
