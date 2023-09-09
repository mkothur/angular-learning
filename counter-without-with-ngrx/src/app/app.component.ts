import { Component, OnInit } from '@angular/core';
import { CountService } from './services/count.service';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/shared/shared.selectors';
import { autoLogin } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  // providers: [CountService]
})
export class AppComponent implements OnInit {
  title = 'counter-without-wth-ngrx';
  showLoading !: Observable<boolean>;
  errorMessage !: Observable<string>;
  constructor(
    // public countService: CountService 
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin())
  }
  
  // handleIncrement() {   
  //   this.countService.increment();  
  // }
  // handleDecrement() {   
  //   this.countService.decrement();  
  // }
  // handleReset() {   
  //   this.countService.reset();  
  // }
}
