import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { getChannel } from '../state/counter.selectors';
import { changeChannelName, customincrement } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-custom-counterngrx-input',
  templateUrl: './custom-counterngrx-input.component.html',
  styleUrls: ['./custom-counterngrx-input.component.css']
})
export class CustomCounterngrxInputComponent implements OnInit {
  value !: number;
  //channelName !: string;
  channelName$ !: Observable<string>
  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    // this.store.select(getChannel).subscribe(data => {
    //   console.log('channelname observale called')
    //   this.channelName = data
    // }) 
    this.channelName$ = this.store.select(getChannel)
  }
  onAdd() {
    this.store.dispatch(customincrement({count: +this.value}))
  }
  onChangeChannelName() {
    this.store.dispatch(changeChannelName())
  }
}
