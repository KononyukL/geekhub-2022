import { axiosInstance } from '../index';
import { TPeopleData } from './types';

export const peopleApi = {
  async people() {
    const result = await axiosInstance.get<TPeopleData>(`people`);
    return result.data.results;
  }
};
