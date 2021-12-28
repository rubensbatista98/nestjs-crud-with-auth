import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [TasksModule, AuthModule, UsersModule],
})
export class AppModule {}
