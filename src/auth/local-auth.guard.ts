import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Por debaixo dos pano ele chama o local.strategy
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
