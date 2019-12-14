import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {


    constructor(private counterService: CounterService) { }

  public readonly activeUsers: string[] = ['John Doe', 'John Bob'];

  public readonly inactiveUsers: string[] = ['Santa Klaus'];


  public setToInactive(user: string): void {
    this.counterService.count()
    this.activeUsers.splice(this.activeUsers.indexOf(user),1);
    this.inactiveUsers.push(user);
  }

  public setToActive(user: string): void {
    this.counterService.count()
    this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1);
    this.activeUsers.push(user);
  }

  public addInactiveUser(user: string): void{
    this.inactiveUsers.push(user);
  }
  
}