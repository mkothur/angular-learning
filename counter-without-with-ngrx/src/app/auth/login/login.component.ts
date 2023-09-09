import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../state/auth.state';
import { loginStart } from '../state/auth.actions';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup | any;
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  onLoginSubmit() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(loginStart({ email, password }))
  }
}
