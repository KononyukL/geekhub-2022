import { axiosInstance } from '../index';

export const peopleApi = {
  async people() {
    const result = await axiosInstance.get(`people`);
    return result.data.results;
  }
};
