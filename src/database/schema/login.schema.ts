import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoginDocument = Login & Document;

@Schema()
export class Login {
  @Prop({required: true})
  user_id: string;

  @Prop({required: true})
  login_time: number;

  @Prop({required: true})
  ip_address: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);