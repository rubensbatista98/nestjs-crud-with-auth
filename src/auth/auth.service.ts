import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Valida se o usuario é quem diz ser
  validateUser(email: string, pass: string) {
    const user = this.usersService.findOne(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  // Gera e retorna o JWT access token com o payload que é os dados do usuario
  // So é chamado caso o usuario seja validado no login
  login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
