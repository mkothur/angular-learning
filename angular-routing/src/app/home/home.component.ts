import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {

  }
  goToProducts() {
    console.log('Trying to update database ...');
    setTimeout(() => {
      console.log('Database is updated successfully');
      this.router.navigate(['products'])
    }, 2000)
  }
  goToForms() {
    console.log('navigating to Forms page ...');
    this.router.navigate(['form'])
  }
  goToUsers() {
    console.log('navigating to users page ...');
    this.router.navigate(['users'])
  }
}
