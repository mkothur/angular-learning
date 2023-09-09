import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { PostService } from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular demo';
  date:string = new Date().toLocaleDateString();
  time:string = '';
  count:number = 0;
  stringInterpolation:string = 'String Interpolation';
  propertyBinding:string = "Property Binding";
  isdisabled:boolean = true;
  classBinding:string = "Class Binding";
  isactive:boolean = true;
  styleBinding:string="Style Binding";
  colorVar:string="orange";
  eventBinding:string="Event Binding";
  counter:number=0;
  name:string='';
  twoWayBinding:string="Two way Binding";
  course:string="";
  courses:Array<string> = new Array<string>();
  show:boolean=true;
  fruits: Array<string> = new Array<string>('Apple', 'Orange', 'Banana');
  titlePipe: string = 'Example';
  personObj = {
    name: 'John',
    salary: 2000
  };
  greet:string='welcome onboard';
  email:string='';
  parentProp:string="Child header title - Parent to child communication using @Input decorator"
  childProp:string=''

  timerId = setInterval(() => {
    this.time = new Date().toLocaleTimeString()
  }, 1000);
  posts:any;
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  } 

  increment() {
    this.counter += 1;
  }
  handleChange(e:any) {
    this.name = e.target.value
  }
  handleClick() {
    this.courses.push(this.course);
    this.course = ''
  }
  updateEmail(templateRef: string) {
    this.email = templateRef
  }
  showChildData(dataFromChild: string) {
    this.childProp=dataFromChild
  }
  @ViewChild(ChildComponent) child: any
  childComponentProp:string= '';
  getChildData() {
    this.childComponentProp = this.child.sendChildPropToParent();
  }
  @ViewChild("domRef") refOfDiv: any;

  ChangeDiv() {
   console.log(this.refOfDiv)
   this.refOfDiv.nativeElement.style.background = 'blue';
  }
  firstName:string="";

  getFirstName() {
    console.log(this.firstName);
  }

  // ngAfterViewInit() {
  //   this.userInputRef.nativeElement.onkeyUp = function(){
  //     console.log(this.userInputRef.nativeElement.value);
  //   }
  // }
  getLastName(lastName: string) {
    console.log(lastName);
  }
  @ViewChild("username", { static: true }) usernameElement: ElementRef;
  myusername: string = "";
  constructor(usernameElement: ElementRef, private service:PostService) {
    this.usernameElement = usernameElement;
  }

  clickme() {
    this.myusername = this.usernameElement.nativeElement.value;
    console.log("it does nothing", this.myusername);
  }
}
