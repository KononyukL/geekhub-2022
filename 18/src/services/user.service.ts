import { UserModel, User } from '../model';
import { HttpError } from '../common/error';
import {IUserLogin} from "../common/type-and-interfaces";

export class UserService {
  async addUser({login, isAdmin = false, ...rest }: User): Promise<User> {
    const existed = await UserModel.findOne({ login });

    if (existed) {
      throw new HttpError(409, 'Username already exists', 'UserService');
    }

    return UserModel.create({ login, isAdmin, ...rest });
  }

  async getUser(credentials: IUserLogin): Promise<User> {
    const user = await UserModel.findOne(credentials);

    if (!user) {
      throw new HttpError(404, 'Login or password incorrect', 'UserService');
    }

    return user;
  }
}

export const userService = new UserService();
