// casl.guard.ts
import { Injectable, CanActivate, ExecutionContext, SetMetadata, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { defineAbilities } from './casl-ability-builder';

export const ABILITIES = 'abilities';
export const CHECK_ABILITIES = (actionsAndSubject:string[])=> SetMetadata(ABILITIES,actionsAndSubject);

@Injectable()
export class CaslGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredAbilities = this.reflector.get<string[]>(
      ABILITIES,
      context.getHandler()
    );
    if (!requiredAbilities) {
      return true;
    }

    const user = context.switchToHttp().getRequest().user; // Replace with your user retrieval logic
    const ability = defineAbilities(user)
    const flag = ability.can(requiredAbilities[0],requiredAbilities[1])
    if(!flag){
        throw new ForbiddenException("Unauthorized");
    }
    return true;
  }
}