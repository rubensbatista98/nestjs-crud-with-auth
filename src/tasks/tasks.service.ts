import { Injectable } from '@nestjs/common';
import { TaskDto } from './tasks.dto';

let lastId = 0;

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

  constructor() {
    lastId = this.tasks.length;
  }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  create(task: TaskDto) {
    const newTask = { ...task, id: ++lastId };

    this.tasks.push(newTask);

    return newTask;
  }

  update(taskId: number, { id, ...updateData }: TaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    const taskUpdated = { ...this.tasks[taskIndex], ...updateData };

    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? taskUpdated : task,
    );

    return taskUpdated;
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
