import { Component } from '@angular/core';
import { CounterService } from "../counter.service";
import { UserService } from "../user.service";

@Component({
  selector: 'lab3',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    constructor(private counterService: CounterService, private userService: UserService) { }

    public newUser: string = '';

    public addNewUser(): void {
      this.userService.addInactiveUser(this.newUser);
      this.newUser = '';
    }

}
