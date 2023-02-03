import { configureStore } from '@reduxjs/toolkit';
import newsListReducer from './newsList';
import newsReducer from './news';
import commentsReducer from './comments';
export const index = configureStore({
  reducer: {
    newsList: newsListReducer,
    news: newsReducer,
    comments: commentsReducer
  }
});
