import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any
  url = "https://api.github.com/users";
  isLoading: boolean = false
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.isLoading = true;
    this.http.get(this.url).subscribe(res => {
      console.log('success');
      setTimeout(() => {
        this.isLoading = false
        this.users = res
      }, 3000)
      console.log(res)
    }, error => {
      console.log('error', error);
    }, () => {
      console.log('completed');
    })
  }
  
  goToGithub(url: string) {
    window.open(url, '_blank')
  }

}
