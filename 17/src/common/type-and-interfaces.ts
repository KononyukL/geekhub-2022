import { HttpError } from './error';
import { NextFunction, Request, Response } from 'express';
import { Post } from '../model/post.model';

export interface IPostData {
  userId: string;
  topic: string;
  text: string;
}

export interface IGetPostData {
  userId: string;
  skip: number;
  take: number;
}
export interface IGetPostResult {
  total: number;
  data: Post[];
}
export interface IChangePostData {
  id: string;
  topic?: string;
  text?: string;
}

export interface IExceptionFilter {
  catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction): void;
}
