import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  @Input() message: string | undefined;
  constructor() {
    console.log('Constructor called')
  }
  ngOnInit(): void {
    console.log('ngOnInit called')
  }
  ngOnChanges(): void {
    console.log('ngOnChanges called')
  }

}
