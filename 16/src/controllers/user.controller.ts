import express, { Request, Response, NextFunction } from 'express';
import { userService } from '../services';

export class UserController {
  router = express.Router();
  constructor() {
    this.router.post('/register/', this.register);
    this.router.post('/login', this.login);
  }
  register = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;
    const user = await userService.addUser(login, password);

    res.send(user);
  };
  login = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;
    const user = await userService.getUser(login, password);

    res.send(user);
  };
}
export const userController = new UserController();
