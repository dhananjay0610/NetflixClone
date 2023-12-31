import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className=" w-36 m-1 md:w-48 md:m-2">

      <img alt="movieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
