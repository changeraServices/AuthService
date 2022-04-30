import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({required: true})
  user_id: string;

  @Prop({required: true})
  is_loggedIn: boolean;

  @Prop({required: true})
  refresh_token: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);