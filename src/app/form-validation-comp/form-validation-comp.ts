import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-validation-comp',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-validation-comp.html',
  styleUrl: './form-validation-comp.css',
})
export class FormValidationComp {
  submitted=false;
  myValues ={
    name:"",
    email :""
  }
  onSubmit(){
    this.submitted=true;
  }
}
