import { Component } from '@angular/core';
import {PostService} from './services/post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Concepts';
  // counterTitle:string="Counter with Angular";
  // count:number=0;
  // someValue:string="";
  // someValues:Array<string> = new Array<string>();
  // color:string="red";
  // overColor:string=""
  // eventsTitle:string="Angular Events";
  // inputValue:string="";
  // nameInter:string="Interpolation";
  // nameProp:string="Property Binding";
  // disable:boolean=false;
  // subTitle:string="Two way Binding:";
  // dataValue:any;
  // posts:any;

  constructor(private service:PostService) {}
  // ngOnInit() {
  //   this.service.getPosts()
  //     .subscribe(response => {
  //       this.posts = response;
  //     });
  // }  
  // ShowInterpolation() {
  //   return 'Interpolation';
  // }
  // HandleClick() {
  //   this.someValues.push(this.someValue);
  //   this.someValue = ''
  // }
  // HandleCounter(counterType: string) {
  //   counterType === 'increment' ? this.count++ : this.count--
  // }
  // HandleReset() {
  //   this.count = 0;
  // }
  // ChangeColor() {
  //   this.color = "yellow"
  // }
  // HandleEvent(name:string) {
  //  alert(name)
  // }
  // DifferentEvents(eventType: string) {
  //   console.warn(eventType, "event is fired");
  //   this.overColor = "blue"
  // }
  // getInputValue(val:string) {
  //   this.inputValue = val
  // }
}
