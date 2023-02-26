import { UserModel, User } from '../model';
import { HttpError } from '../common/error';

export class UserService {
  async addUser(login: string, password: string, isAdmin: boolean = false): Promise<User> {
    const existed = await UserModel.findOne({ login });

    if (existed) {
      throw new HttpError(409, 'Username already exists', 'UserService');
    }

    return UserModel.create({ login, password, isAdmin });
  }

  async getUser(login: string, password: string): Promise<User> {
    const user = await UserModel.findOne({ login, password });

    if (!user) {
      throw new HttpError(404, 'Login or password incorrect', 'UserService');
    }

    return user;
  }
}

export const userService = new UserService();
