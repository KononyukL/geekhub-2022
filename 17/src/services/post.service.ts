import {
  IGetPostData,
  IGetPostResult,
  IChangePostData,
  IPostData,
} from '../common/type-and-interfaces';
import {Post, PostModel} from "../model/post.model";
import {Types} from "mongoose";
import {HttpError} from "../common/error";

export class PostService {
  async addPost({ userId, topic, text }: IPostData): Promise<Post> {
    return PostModel.create({ userId: new Types.ObjectId(userId), topic, text });
  }

  async getPost({ userId, skip, take }: IGetPostData): Promise<IGetPostResult> {
    const query = {userId: new Types.ObjectId(userId) }

    return {
      total: await PostModel.countDocuments(query),
      data: await PostModel.find(query).skip(skip).limit(take)
    };
  }
  async changePost({ id, topic, text }: IChangePostData): Promise<Post | null> {
    const changedPost = await PostModel.findByIdAndUpdate(new Types.ObjectId(id), {topic, text}, {new: true});

    if (!changedPost) {
      throw new HttpError(404, 'Post with this id was not found', 'PostService');
    }

    return changedPost;
  }
  async deletePost(id: string): Promise<void> {
    const deletedPost = await PostModel.findByIdAndDelete(new Types.ObjectId(id));

    if (!deletedPost) {
      throw new HttpError(404, 'Post with this id was not found', 'PostService');
    }
  }
}

export const postService = new PostService();
