import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  @ViewChild('myForm', {static: true}) myForm: any;
  users = [{
    name: 'Abc',
    email: 'Abc@abc.com',
    readTerms: false
  }];
  onSubmit(myForm: any) {
    let {emailAddress, readTerms, uname} = myForm.form.controls
    this.users.push({ name: uname.value, email: emailAddress.value, readTerms: readTerms.value })
    console.log(this.users)
    this.myForm.reset()
  }
}
