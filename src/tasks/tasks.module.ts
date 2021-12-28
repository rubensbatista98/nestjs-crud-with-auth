import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [AuthModule],
})
export class TasksModule {}
