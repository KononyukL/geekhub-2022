import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './thunks';

const initialState = {
  news: {},
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { getNews };
export const {} = newsSlice.actions;

export const selectNews = (state) => state.news;

export default newsSlice.reducer;
