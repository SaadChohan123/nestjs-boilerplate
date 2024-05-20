import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class RequestcontextService {

    constructor(
        @Inject(REQUEST) private request: Request
    ) { }


    getUserId(){
        const userId = this.request["userId"]; 
        return userId;
    }
}
