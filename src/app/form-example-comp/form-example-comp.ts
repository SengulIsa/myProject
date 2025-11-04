import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-example-comp',
  imports: [FormsModule],
  templateUrl: './form-example-comp.html',
  styleUrl: './form-example-comp.css',
})
export class FormExampleComp {
  submitted=false;
  myValues ={
    name:"",
    email :"",
    password :"",
    repassword :"",
    gender :"",
    city:"",
    approve:"",
    selected : ""

  }
  onSubmit(){
    this.submitted=true;
  }
}
