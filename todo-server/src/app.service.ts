import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { TodoItem, TodoItemDocument } from './schemas/TodoItem';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(TodoItem.name) private todoItemModel: Model<TodoItemDocument>,
  ) {}

  getTodoItems() {
    return this.todoItemModel.find();
  }

  createTodoItem() {
    this.todoItemModel.create({ itemId: uuidv4(), value: 'example' });
  }
}
