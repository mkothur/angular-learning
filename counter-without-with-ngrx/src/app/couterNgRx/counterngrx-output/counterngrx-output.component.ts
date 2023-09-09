import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counterngrx-output',
  templateUrl: './counterngrx-output.component.html',
  styleUrls: ['./counterngrx-output.component.css']
})
export class CounterngrxOutputComponent implements OnInit {
    // counter !: number;
    // counterSubscription: Subscription | undefined;
    counter$ !:Observable<number>
    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
      // this.counterSubscription = this.store.select(getCounter).subscribe(data => {
      //   console.log('counter observable called')
      //   this.counter = data
      // })
      this.counter$ = this.store.select(getCounter);
    }
    // ngOnDestroy() {
    //   if (this.counterSubscription) {
    //     this.counterSubscription.unsubscribe()
    //   }
    // }
}
