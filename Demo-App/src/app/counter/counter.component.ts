import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;
  counterProp:string="Counter component is child of App"
  timerRef: any;
  handleCounter() {
    this.counter += 1;
  }
  startTimer () {
    this.timerRef = setInterval(() => {
        this.counter += 1;
    }, 100);
  }
  stopTimer () {
    clearInterval(this.timerRef);
  }
  resetTimer () {
    clearInterval(this.timerRef);
    this.counter = 0;
  }
}
