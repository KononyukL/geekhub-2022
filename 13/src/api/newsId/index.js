import { axiosInstance } from '../index';

export const newsApi = {
  async newsId() {
    const result = await axiosInstance.get('newstories.json?orderBy="$key"&limitToFirst=100');
    return result.data;
  },
  async news(id) {
    const result = await axiosInstance.get(`item/${id}.json?print=pretty`);
    return result.data;
  }
};
