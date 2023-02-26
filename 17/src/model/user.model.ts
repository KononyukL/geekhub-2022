import { prop, getModelForClass } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class User {
  @prop({ id: true })
  id!: Types.ObjectId;

  @prop({ required: true })
  login!: string;

  @prop({ required: true })
  password!: string;

  @prop({ default: false })
  isAdmin?: boolean;
}

export const UserModel = getModelForClass(User);
