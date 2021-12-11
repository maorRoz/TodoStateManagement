import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/items')
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get()
getTodoItems(){
  return this.appService.getTodoItems();
}

  @Post()
  createTodoItem() {
    return this.appService.createTodoItem();
  }
}
