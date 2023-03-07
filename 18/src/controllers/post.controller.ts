import { Request, Response } from 'express';
import { postService } from '../services';
import { BaseController } from '../common/abstract/base.controller';
import { editPostBodySchema, postParamsSchema } from '../common/validation/post.validation';

export class PostController extends BaseController {
  constructor() {
    super();
    this.bindRouter([
      {
        path: '/:id',
        method: 'patch',
        handler: this.changePost,
        validators: {
          body: editPostBodySchema,
          params: postParamsSchema
        }
      },
      {
        path: '/:id',
        method: 'delete',
        handler: this.deletePost,
        validators: {
          params: postParamsSchema
        }
      }
    ]);
  }

  changePost = async (req: Request, res: Response) => {
    const post = await postService.changePost({ ...req.params, ...req.body });
    res.send(post);
  };
  deletePost = async (req: Request, res: Response) => {
    await postService.deletePost(req.params.id);
    res.end();
  };
}
export const postController = new PostController();
