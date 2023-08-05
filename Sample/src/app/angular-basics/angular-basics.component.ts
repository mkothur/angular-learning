import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent {
  title:string='Angular basics';
  topic:string="Angular two way binding";
  inputValue:string='';
  inputValuesArr:Array<string> = new Array<string>();
  dataBinding:string="";
  counterExample:string="Counter Example";
  counter:number=0;
  styleBinding:string="click to change the color";
  color:string="balck";
  changeMyColor() {
    this.color = "green";
    this.styleBinding="Its changed";
  }
  HandleInputValues() {
    this.inputValuesArr.push(this.inputValue);
    this.inputValue = '';
  }
  HandleCounterClick(counterType:string) {
    counterType === 'increment' ? this.counter++ : this.counter--
  }
  Reset() {
    this.counter = 0;
  }

}
