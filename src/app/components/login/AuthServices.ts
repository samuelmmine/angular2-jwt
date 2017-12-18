import { Injectable } from '@angular/core';

@Injectable()
export class AuthServices {


  test(): string {
  	console.log('me achou');
    return 'working';
  }
}