import { axiosInstance } from '../index';

export const commentsApi = {
  async comment(id) {
    const result = await axiosInstance.get(`item/${id}.json?print=pretty`);
    return result.data;
  }
};
