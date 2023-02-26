import express, { NextFunction, Request, Response } from 'express';
import { postService } from '../services';

export class PostController {
  router = express.Router();
  constructor() {
    this.router.patch('/:id', this.changePost);
    this.router.delete('/:id', this.deletePost);
  }

  changePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = (req.params.id as string) || '';
      const { topic, text } = req.body;
      const post = await postService.changePost({ id, topic, text });

      res.send(post);
    } catch (e) {
      next(e);
    }
  };
  deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = (req.params.id as string) || '';
      await postService.deletePost(id);

      res.end();
    } catch (e) {
      next(e);
    }
  };
}
export const postController = new PostController();
