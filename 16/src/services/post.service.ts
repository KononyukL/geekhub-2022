import {
  IPostData,
  IPost,
  IGetPostData,
  IGetPostResult,
  IChangePostData
} from '../common/type-and-interfaces';

export class PostService {
  private db: IPost[] = [];
  private idCounter: number = 1;
  async addPost({ userId, topic, text }: IPostData): Promise<IPost> {
    const post: IPost = {
      id: this.idCounter,
      userId,
      topic,
      text
    };

    this.db.push(post);
    this.idCounter++;

    return post;
  }

  async getPost({ userId, skip, take }: IGetPostData): Promise<IGetPostResult> {
    const posts = this.db.filter((post) => post.userId === userId);

    return {
      total: posts.length,
      data: posts.slice(skip, skip + take)
    };
  }
  async changePost({ id, topic, text }: IChangePostData): Promise<IPost | undefined> {
    let changedPost: IPost | undefined;

    const result = this.db.map((post) => {
      if (post.id === id) {
        const newPost = {
          ...post,
          topic: topic || post.topic,
          text: text || post.text
        };

        changedPost = newPost;

        return newPost;
      }

      return post;
    });

    this.db = result;

    return changedPost;
  }

  async deletePost(id: number): Promise<void> {
    const result = this.db.filter((post) => post.id !== id);

    this.db = result;
  }
}

export const postService = new PostService();
