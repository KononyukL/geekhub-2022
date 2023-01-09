import { axiosInstance } from '../index';

export const usersApi = {
  async users() {
    const result = await axiosInstance.get('users');

    return result.data;
  },
  async userTodos(id) {
    const result = await axiosInstance.get(`users/${id}/todos`);

    return result.data;
  }
};
