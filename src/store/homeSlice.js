import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {name: "ahmad"},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
