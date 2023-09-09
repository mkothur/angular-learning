import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { signUpStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpForm: FormGroup | any;
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSignUpSubmit() {
    if(!this.signUpForm.valid) {
      return;
    }
    const { email, password } = this.signUpForm.value;
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(signUpStart({ email, password }))
  }
}
