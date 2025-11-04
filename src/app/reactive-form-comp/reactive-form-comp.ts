import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form-comp',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form-comp.html',
  styleUrl: './reactive-form-comp.css',
})
export class ReactiveFormComp {
  fb = new FormBuilder();
  submitted = false;
  form = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email :['',[Validators.required,Validators.email]],
    kvkk :[,[Validators.required]]
  })

  onSubmit(){
    this.submitted=true;
  }
}
