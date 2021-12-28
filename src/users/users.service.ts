import { Injectable } from '@nestjs/common';

import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      email: 'lucas@epanel.com',
      password: 'pac123',
    },
    {
      id: 2,
      email: 'maria@teste.com',
      password: 'mari123',
    },
  ];

  findOne(email: string): UserDTO | undefined {
    return this.users.find((user) => user.email === email);
  }
}
