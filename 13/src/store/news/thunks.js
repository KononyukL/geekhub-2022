import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentsApi } from '../../api/comments';
import { newsApi } from '../../api/newsId';

export const getNews = createAsyncThunk('news/getNews', async (id, { rejectWithValue }) => {
  try {
    const data = await newsApi.news(id);
    const comments = data.kids
      ? await Promise.all(data.kids.map((id) => commentsApi.comment(id)))
      : [];

    return { ...data, kids: comments };
  } catch (e) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});
