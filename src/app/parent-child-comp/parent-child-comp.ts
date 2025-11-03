import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  imports: [],
  template: 
  `
  <p> Merhaba {{name}} bugün nasılsın ? </p>
  ` ,
})
export class ChildComp {
  @Input() name = "";
}



@Component({
  selector: 'parent-comp',
  imports: [ChildComp],
  template: 
  `
    <h3> Parent Component </h3>
    <label> İsim : </label>
    <child-comp [name]= "user" > </child-comp>
  ` ,
  styleUrl: './parent-child-comp.css',
})
export class ParentComp {
 user = "İsa";
}
