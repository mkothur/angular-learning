import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { decrement, increment, reset } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-counterngrx-buttons',
  templateUrl: './counterngrx-buttons.component.html',
  styleUrls: ['./counterngrx-buttons.component.css']
})
export class CounterngrxButtonsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit():void {}

  onIncrement() {
    this.store.dispatch(increment())
  }
  onDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
