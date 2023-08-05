import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { PostsGetCallComponent } from './posts-get-call/posts-get-call.component'

@NgModule({
  declarations: [
    AppComponent,
    AngularBasicsComponent,
    PostsGetCallComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
