import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 m-2">

      <img alt="movieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
