import { NextFunction, Request, Response, Router } from 'express';
import { Post } from '../model/post.model';
import { HttpError } from './error';

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

export interface IUserLogin {
  login: string;
  password: string;
}

export interface IExceptionFilter {
  catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction): void;
}

export type TBaseObject = Record<string, any>;

export interface IControllerRouter {
  path: string;
  method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
  handler: (req: Request, res: Response, next: NextFunction) => void;
  validators?: TBaseObject;
}

