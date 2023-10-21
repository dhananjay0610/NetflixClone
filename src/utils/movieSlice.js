import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    topRatedMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
    addTopRatedMovies : (state, action) =>{
      state.topRatedMovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo , addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;
