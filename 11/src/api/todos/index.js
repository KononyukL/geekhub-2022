import { axiosInstance } from '../index';

export const todosApi = {
  async todos() {
    const result = await axiosInstance.get('todos');

    return result.data;
  },
  async todo({ id, todoId }) {
    const result = await axiosInstance.get(`users/${id}/todos`, {
      params: {
        id: todoId
      }
    });

    return result.data;
  }
};
