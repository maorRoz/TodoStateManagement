import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoItemDocument = TodoItem & Document;

@Schema()
export class TodoItem {
  @Prop({ required: true })
  itemId: string;

  @Prop({ required: true })
  value: string;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);
