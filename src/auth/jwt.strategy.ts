import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Aqui valida se o token enviado no cabecalho é valido, dado o tempo de expiracao e o secret
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // Esse metodo é chamado apos a validacao do token, e o passport ja injeta por parametro o payload que vem no token
  // O objeto retornando sera injetada na requisicao como 'user'
  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
