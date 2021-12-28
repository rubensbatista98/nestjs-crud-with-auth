import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // Por padrao espera que o corpo da requisicao tenha um campo 'username'
    // Aqui eu digo para ele procurar o campo 'email' ao inves do 'username'
    super({ usernameField: 'email' });
  }

  // Por debaixo dos panos, apos ele pegar os campos de email e password da requisicao
  // Ele chama esse metodo passando os campos como parametros
  // Dai aqui caso o usuario seja valido, ele injeta o objeto do usuario retornado no objeto de requisicao
  validate(email: string, password: string) {
    const user = this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
