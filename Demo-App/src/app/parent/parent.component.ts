import { Component, OnChanges, OnInit, SimpleChanges,Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  isChild:boolean=true;
  channelName:string='';
  constructor() {
    console.log('Parent Constructor is called')
  }
  ngOnInit(): void {
    console.log('Parent OnInit is called')
  }
  ngOnChanges(): void {
    console.log('Parent OnChanges is called')
  }
  // ngDoCheck(): void {
  //   console.log('Parent DoCheck is called')
  // }
  toggleChild() {
    this.isChild = !this.isChild
  }
}
