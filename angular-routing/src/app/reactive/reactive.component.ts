import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{
  myForm: FormGroup | any;
  users = [{
    name: 'Abc',
    email: 'Abc@abc.com',
    readTerms: false
  }];
  constructor() {}
  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        uname: new FormControl('John', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        readTerms: new FormControl(false)
      }
    )
  }

  onSubmit() {
    let {uname, email, readTerms} = this.myForm.controls
    this.users.push({ name: uname.value, email: email.value, readTerms: readTerms.value })
    console.log(this.users)
    this.myForm.reset()
  }
}
