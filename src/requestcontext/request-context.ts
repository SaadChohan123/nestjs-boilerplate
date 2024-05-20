export class RequestContext {
    constructor(public readonly request: any) {}
  
    getUserId(): string {
      return this.request.userId || null; // Handle different request object structures
    }
  
  }