import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT toggle",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    MovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = movieResults;
      state.MovieName = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
