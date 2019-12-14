import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent {

  constructor(private userService: UserService) { }


}