import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12relative z-20">
        <MovieList title="NowPlayingList" movies={movies?.nowPlayingMovies} />
      </div>
      <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
      <MovieList title="Anime Movies" movies={movies?.nowPlayingMovies} />
      <MovieList title="NowPlayingList" movies={movies?.nowPlayingMovies} />
      <MovieList title="NowPlayingList" movies={movies?.nowPlayingMovies} />
      <MovieList title="NowPlayingList" movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;

/***
 * MovieList - Popular
 *    MovieCard * n
 * MovieList - Now Playing
 * MovieList - Trending
 * MovieList - --------
 *
 *
 */

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
