import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './thunks';

const initialState = {
  list: [],
  isLoading: false,
  error: ''
};

export const newsListSlice = createSlice({
  name: 'newsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { getAllNews };
export const {} = newsListSlice.actions;

export const selectNewsList = (state) => state.newsList;

export default newsListSlice.reducer;
