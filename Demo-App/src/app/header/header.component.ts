import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() textProp:string | undefined
  @Output() onChildHasData = new EventEmitter<string>()

  sendDataToParent() {
    this.onChildHasData.emit('Child to Parent using @Output decorator callback function')
  }

}
