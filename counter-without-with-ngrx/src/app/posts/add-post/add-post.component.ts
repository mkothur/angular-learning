import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm : FormGroup | any;
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      body: new FormControl(null, [Validators.required, Validators.minLength(20)])
    })
  }

  onAddPost() {
    const {title, body} = this.postForm.value
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      title: title,
      body: body
    }
    this.store.dispatch(addPost({post}))
  }

  // bodyValidation() {
  //   const bodyError = this.postForm.get('body');
  //   if (bodyError.touched && !bodyError.valid) {
  //     if (bodyError.errors.required) {
  //       return 'Body is required';
  //     }
  //     if (bodyError.errors.minlength) {
  //       return 'Body should be in length of 20'
  //     }
  //   }
  // }
 
}
