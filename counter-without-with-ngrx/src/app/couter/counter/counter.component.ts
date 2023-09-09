import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CountService]
})
export class CounterComponent implements OnInit{
  counter: number = 0;
  subTitle: string = "Counter App using @Input & @Output decorators"
  constructor(public countService: CountService ) {}
  ngOnInit(): void {

  }

  onIncrement() {
    this.counter++
  }
  onDecrement() {
    this.counter--
  }

  onReset() {
    this.counter = 0;
  }


  handleIncrement() {   
    this.countService.increment();  
  }
  handleDecrement() {   
    this.countService.decrement();  
  }
  handleReset() {   
    this.countService.reset();  
  }
}
