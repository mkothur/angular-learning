import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pwd: string) {
    if (uname === 'mkothur' && pwd === '1234') {
      return 200;
    } else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login'])
  }
}