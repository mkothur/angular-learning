import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selctors';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post !: Post;
  postForm : FormGroup | any;
  postSubscription: Subscription | undefined;
  constructor(private route: ActivatedRoute, private store: Store<AppState>){}
 
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe((data) => {
        this.post = data;
        this.createForm()
      })
    })
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      body: new FormControl(this.post.body, [Validators.required, Validators.minLength(20)])
    })
  }

  onUpdatePost() {
    const {title, body} = this.postForm.value
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      id: this.post.id,
      title: title,
      body: body
    }
    this.store.dispatch(updatePost({post}))
  }

  ngOnDestroy() {
    if (this.postSubscription ) {
      this.postSubscription.unsubscribe();
    }
  }
}
