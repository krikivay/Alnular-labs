import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  public counter: number = 0

  public count() {
    this.counter++;
  }

}