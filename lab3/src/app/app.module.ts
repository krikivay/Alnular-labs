import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from "../active-user/active-user.component";
import { InactiveUserComponent } from "../inactive-user/inactive-user.component";
import { UserService } from "../user.service";
import { CounterService } from "../counter.service";


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ActiveUserComponent, InactiveUserComponent ],
  providers: [UserService, CounterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
