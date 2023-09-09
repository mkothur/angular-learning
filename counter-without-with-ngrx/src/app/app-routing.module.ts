import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { CounterngrxComponent } from './couterNgRx/counterngrx/counterngrx.component';
// import { CounterComponent } from './couter/counter/counter.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';
// import { AddPostComponent } from './posts/add-post/add-post.component';
// import { EditPostComponent } from './posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'counter',
    loadChildren: () => import('./couter/counter.module').then(module => module.CounterModule)
  },
  { 
    path: 'counterngrx',
    loadChildren: () => import('./couterNgRx/counterngrx.module').then(module => module.CounterNgrxModule)
  },
  {
    path: 'posts', 
    loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
