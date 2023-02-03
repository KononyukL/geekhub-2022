import { createSlice } from '@reduxjs/toolkit';
import { getChildrenComments } from './thunks';

const initialState = {
  children: [],
  isLoading: false,
  error: ''
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setDefaultChildren: (state) => {
      state.children = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChildrenComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChildrenComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.children = [...state.children, ...action.payload];
      })
      .addCase(getChildrenComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { getChildrenComments };

export const { setDefaultChildren } = commentsSlice.actions;

export const selectComments = (state) => state.comments;

export default commentsSlice.reducer;
