import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
// import { CounterComponent } from './couter/counter/counter.component';
// import { CounterOutputComponent } from './couter/counter-output/counter-output.component';
// import { CounterButtonsComponent } from './couter/counter-buttons/counter-buttons.component';
// import { CounterngrxComponent } from './couterNgRx/counterngrx/counterngrx.component';
// import { CounterngrxOutputComponent } from './couterNgRx/counterngrx-output/counterngrx-output.component';
// import { CounterngrxButtonsComponent } from './couterNgRx/counterngrx-buttons/counterngrx-buttons.component';
// import { CustomCounterngrxInputComponent } from './couterNgRx/custom-counterngrx-input/custom-counterngrx-input.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';
// import { AddPostComponent } from './posts/add-post/add-post.component';
// import { EditPostComponent } from './posts/edit-post/edit-post.component';
// import { counterReducer } from './couterNgRx/state/counter.reducer';
// import { postsReducer } from './posts/state/posts.reducer';
import { appReducer } from './store/app.state';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthEffects } from './auth/state/auth.effects';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    // CounterComponent,
    // CounterOutputComponent,
    // CounterButtonsComponent,
    // CounterngrxComponent,
    // CounterngrxOutputComponent,
    // CounterngrxButtonsComponent,
    // CustomCounterngrxInputComponent,
    // PostsListComponent,
    // AddPostComponent,
    // EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: true, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
