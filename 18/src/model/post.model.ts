import { prop, getModelForClass } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class Post {
  @prop({ required: true })
  userId!: Types.ObjectId;

  @prop({ required: true })
  topic!: string;

  @prop({ required: true })
  text!: string;

  @prop({ id: true })
  id!: Types.ObjectId;
}

export const PostModel = getModelForClass(Post);
