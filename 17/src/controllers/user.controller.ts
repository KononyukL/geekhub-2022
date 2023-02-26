import express, { Request, Response, NextFunction } from 'express';
import {postService, userService} from '../services';

export class UserController {
  router = express.Router();
  constructor() {
    this.router.post('/register/', this.register);
    this.router.post('/login', this.login);
    this.router.post('/:userId/post', this.addPost);
    this.router.get('/:userId/posts', this.getPosts);
  }
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { login, password } = req.body;
      const user = await userService.addUser(login, password);

      res.send(user);
    } catch (e) {
      next(e);
    }
  };
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { login, password } = req.body;
      const user = await userService.getUser(login, password);

      res.send(user);
    } catch (e) {
      next(e);
    }
  };
  addPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { topic, text } = req.body;
      const userId = req.params.userId as string || '';
      const post = await postService.addPost({ userId, topic, text });

      res.send(post);
    } catch (e) {
      next(e);
    }
  };
  getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.userId as string || '';
      const skip = parseInt(req.query.skip as string) || 0;
      const take = parseInt(req.query.take as string) || 10;
      const posts = await postService.getPost({ userId, skip, take });

      res.send(posts);
    } catch (e) {
      next(e);
    }
  };
}
export const userController = new UserController();
