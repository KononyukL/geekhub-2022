export interface IUser {
  id: number;
  login: string;
  password: string;
  isAdmin: boolean;
}

export interface IPostData {
  userId: number;
  topic: string;
  text: string;
}

export interface IPost extends IPostData {
  id: number;
}

export interface IGetPostData {
  userId: number;
  skip: number;
  take: number;
}
export interface IGetPostResult {
  total: number;
  data: IPost[];
}
export interface IChangePostData {
  id: number;
  topic?: string;
  text?: string;
}
