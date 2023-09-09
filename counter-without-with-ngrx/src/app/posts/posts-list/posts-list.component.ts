import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selctors';
import { deletePost } from '../state/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts!: Observable<Post[]>
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

  onDeletePost(id: string) {
    if(confirm('Are you sure to delete the post')) {
      this.store.dispatch(deletePost({id}))
    }
    this.router.navigate(['posts'])  
  }

}
