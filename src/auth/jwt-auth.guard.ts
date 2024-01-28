import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate{

    constructor(private jswtService: JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0] //type of token
            const token = authHeader.split(' ')[1] //token itself

            if(bearer !== 'Bearer' || !token){
                throw new UnauthorizedException({message: 'User is unauthorized'})
            }

            const user = this.jswtService.verify(token);
            req.user = user;
            return true;
        }
        catch (e) {
            throw new UnauthorizedException({message: 'User is unauthorized'})
        }
    }
    
}