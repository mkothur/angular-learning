import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts-get-call',
  templateUrl: './posts-get-call.component.html',
  styleUrls: ['./posts-get-call.component.css']
})
export class PostsGetCallComponent {
  posts:any;
  constructor(private service:PostService) {}
  LoadPosts() {
    this.service.getPosts()
      .subscribe(res => this.posts = res)
  }
}
