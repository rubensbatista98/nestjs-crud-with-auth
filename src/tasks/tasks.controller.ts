import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from './tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Get(':id')
  getBydId(@Param('id') id: string): TaskDto {
    console.log(id);
    return this.tasksService.getById(Number(id));
  }

  @Post()
  create(@Body() task: TaskDto): TaskDto {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Body() task: TaskDto, @Param('id') id: string) {
    return this.tasksService.update(Number(id), task);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    this.tasksService.delete(Number(id));
  }
}
