import { IUser } from '../common/type-and-interfaces';

export class UserService {
  private db: IUser[] = [];
  private idCounter: number = 1;
  async addUser(login: string, password: string, isAdmin: boolean = false): Promise<IUser> {
    const user: IUser = {
      id: this.idCounter,
      login,
      password,
      isAdmin
    };

    const existUser = this.db.find((user) => user.login === login);

    if (!existUser) {
      this.db.push(user);
      this.idCounter++;

      return user;
    }

    return existUser;
  }

  async getUser(login: string, password: string): Promise<IUser | string> {
    const user = this.db.find((user) => user.login === login && user.password === password);

    return user || 'User not found';
  }
}

export const userService = new UserService();
