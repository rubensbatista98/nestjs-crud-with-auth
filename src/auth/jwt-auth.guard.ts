import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Por debaixo dos pano ele chama o jwt.strategy
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
