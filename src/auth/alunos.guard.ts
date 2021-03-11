import {CanActivate, ExecutionContext,  Injectable} from '@nestjs/common';
import { Observable } from 'rxjs';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AlunosGuard implements CanActivate {

  constructor(
      private jwtService: JwtService
  ) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    const authorization = request.headers['authorization'];

    if(!authorization)
      return false;

    const splitBearer = authorization.split('Bearer ');
    if(splitBearer.length != 2 || splitBearer[0] !== '')
      return false;

    try {
      this.jwtService.verify(splitBearer[1])
      return true;
    } catch {
      return false;
    }




    return true;

  }

}
