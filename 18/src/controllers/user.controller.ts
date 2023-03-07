import { Request, Response } from 'express';
import { postService, userService } from '../services';
import { BaseController } from '../common/abstract/base.controller';
import { loginBodySchema, registerBodySchema } from '../common/validation/user.validation';
import {addPostBodySchema, userPostParamsSchema, userPostQuerySchema} from '../common/validation/post.validation';

export class UserController extends BaseController {
  constructor() {
    super();
    this.bindRouter([
      {
        path: '/register/',
        method: 'post',
        handler: this.register,
        validators: {
          body: registerBodySchema
        }
      },
      {
        path: '/login',
        method: 'post',
        handler: this.login,
        validators: {
          body: loginBodySchema
        }
      },
      {
        path: '/:userId/post',
        method: 'post',
        handler: this.addPost,
        validators: {
          body: addPostBodySchema,
          params: userPostParamsSchema,
        }
      },
      {
        path: '/:userId/posts',
        method: 'get',
        handler: this.getPosts,
        validators: {
          params: userPostParamsSchema,
          query: userPostQuerySchema
        }
      }
    ]);
  }
  register = async (req: Request, res: Response) => {
    const user = await userService.addUser(req.body);
    res.send(user);
  };
  login = async (req: Request, res: Response) => {
    const user = await userService.getUser(req.body);
    res.send(user);
  };
  addPost = async (req: Request, res: Response) => {
    const post = await postService.addPost({ ...req.body, ...req.params });
    res.send(post);
  };
  getPosts = async (req: Request, res: Response) => {
    const posts = await postService.getPost({ ...req.query as any, ...req.params });

    res.send(posts);
  };
}
export const userController = new UserController();
