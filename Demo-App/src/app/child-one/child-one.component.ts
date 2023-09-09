import { Component, OnChanges, OnDestroy, OnInit, Input, SimpleChanges, DoCheck, AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  counter:number=0;
  interval:any;
  @Input()
  channelName:string = '';

  @ContentChild('projectedContent') projectedContent : any;
  constructor() {
    console.log('ChildOne Constructor is called')
  }
  ngOnInit(): void {
    console.log('ChildOne OnInit is called');
    console.log('child Onint', this.projectedContent)
    // this.interval = setInterval(() => {
    //   this.counter = this.counter +1;
    //   console.log(this.counter)
    // }, 1000)
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval)
    console.log('ChildOne OnDestroy is called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('ChildOne OnChanges is called')
    console.log('child onChnages', this.projectedContent)
  }
  ngAfterContentInit(): void {
    console.log('ChildOne AfterContentInit is called')
    console.log('child AfterConentInit', this.projectedContent)
  }
  ngAfterContentChecked(): void {
    console.log('ChildOne AfterContentChecked is called')
  }
  ngAfterViewInit(): void {
    console.log('ChildOne AfterViewInit is called')
  }
  ngAfterViewChecked(): void {
    console.log('ChildOne AfterViewChecked is called')
  }
  // ngDoCheck(): void {
  //   console.log('ChildOne DoCheck is called')
  // }
}
