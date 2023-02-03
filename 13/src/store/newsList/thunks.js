import { createAsyncThunk } from '@reduxjs/toolkit';
import { newsApi } from '../../api/newsId';

export const getAllNews = createAsyncThunk(
  'newsList/getAllNews',
  async (_, { rejectWithValue }) => {
    try {
      const data = await newsApi.newsId();
      const response = await Promise.all(data.map((id) => newsApi.news(id)));
      return response;
    } catch (e) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
