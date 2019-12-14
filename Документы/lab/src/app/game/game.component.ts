import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game',
  template: `
    <button (click)="start()">Start game</button>
    <hr>
    <button (click)="stop()">Stop game</button>
  `
})
export class GameComponent {
  interval;
  @Output()
  timerEvent = new EventEmitter();
  start() {
    this.interval = setInterval(() => {
      this.timerEvent.emit(Math.floor(Math.random() * 100));
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
  }
}