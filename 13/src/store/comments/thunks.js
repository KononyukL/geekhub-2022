import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentsApi } from '../../api/comments';

export const getChildrenComments = createAsyncThunk(
  'comments/getChildrenComments',
  async (kids, { rejectWithValue }) => {
    try {
      return await Promise.all(kids.map((id) => commentsApi.comment(id)));
    } catch (e) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
