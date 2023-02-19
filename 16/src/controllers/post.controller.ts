import express, { Request, Response } from 'express';
import { postService } from '../services';

export class PostController {
  router = express.Router();
  constructor() {
    this.router.post('/', this.addPost);
    this.router.get('/', this.getPosts);
    this.router.patch('/:id', this.changePost);
    this.router.delete('/:id', this.deletePost);
  }
  addPost = async (req: Request, res: Response) => {
    const { userId, topic, text } = req.body;
    const post = await postService.addPost({ userId, topic, text });

    res.send(post);
  };
  getPosts = async (req: Request, res: Response) => {
    const userId = parseInt(req.query.userId as string) || 0;
    const skip = parseInt(req.query.skip as string) || 0;
    const take = parseInt(req.query.take as string) || 10;
    const posts = await postService.getPost({ userId, skip, take });

    res.send(posts);
  };
  changePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string) || 0;
    const { topic, text } = req.body;
    const post = await postService.changePost({ id, topic, text });

    res.send(post);
  };
  deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string) || 0;
    await postService.deletePost(id);

    res.end();
  };
}
export const postController = new PostController();
