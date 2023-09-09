import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childData: string = 'Demo of ViewChild Decorator for child to parent communication';

  sendChildPropToParent() {
    return this.childData;
  }
}
