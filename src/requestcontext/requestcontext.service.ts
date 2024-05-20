import { Inject, Injectable, Scope, UnauthorizedException } from '@nestjs/common';
import { RequestContext } from './request-context';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class RequestcontextService {

    constructor(
        @Inject(REQUEST) private request: Request
    ) { }

    private context: RequestContext | null = null;

    getUserId(){
        const userId = this.request["userId"]; 
        return userId;
    }


    setContext(request: any) {
        this.context = new RequestContext(request);
    }

    getContext(): RequestContext | null {
        return this.context;
    }

    clearContext() {
        this.context = null;
    }
}
