import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestPipe } from './test.pipe';
import { CounterComponent } from './counter/counter.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { InlineEditingOneComponent } from './inline-editing-one/inline-editing-one.component';
import { InlineEditingtwoComponent } from './inline-editingtwo/inline-editingtwo.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    TestPipe,
    CounterComponent,
    ChildComponent,
    HighlightDirective,
    ParentComponent,
    ChildOneComponent,
    InlineEditingOneComponent,
    InlineEditingtwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
