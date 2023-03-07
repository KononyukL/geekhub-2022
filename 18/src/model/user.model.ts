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

  @prop({ required: true })
  email!: string;

  @prop()
  avatar?: string;

  @prop()
  firstName?: string;

  @prop()
  lastName?: string;

  @prop()
  socials?: {
    facebook: string;
    instagram: string;
    twitter: string;
  };

  @prop({ required: true })
  age!: number;

  @prop()
  interests?: string[];

  @prop({ required: true })
  address1!: string;

  @prop()
  address2?: string;

  @prop({ required: true })
  postIndex!: number;
}

export const UserModel = getModelForClass(User);
