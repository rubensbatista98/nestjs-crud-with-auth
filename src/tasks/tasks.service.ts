import { Injectable } from '@nestjs/common';
import { TaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [
    { id: 1, description: 'Task 01', completed: true },
    { id: 2, description: 'Task 02', completed: true },
    { id: 3, description: 'Task 03', completed: true },
    { id: 4, description: 'Task 04', completed: true },
    { id: 5, description: 'Task 05', completed: true },
    { id: 6, description: 'Task 06', completed: true },
    { id: 7, description: 'Task 07', completed: true },
    { id: 8, description: 'Task 08', completed: true },
  ];

  getAll() {
    return this.tasks;
  }
}
