import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { FirstComp } from './first-comp/first-comp';
//import { ParentComp } from './parent-child-comp/parent-child-comp';
//import { ParentOutputComp } from './parent-child-output-comp/parent-child-output-comp';
//import { VoteParentComp } from './vote-parent-child-comp/vote-parent-child-comp';
// import { DataBindingComp } from './data-binding-comp/data-binding-comp';
// import { FontResizerComp } from './font-resizer-comp/font-resizer-comp';
// import { DirectivesComp } from './directives-comp/directives-comp';
// import { DashbordComp } from './dashbord-comp/dashbord-comp';
// import { TypeCheckingComp } from './type-checking-comp/type-checking-comp';
// import { TaskListComp } from './task-list-comp/task-list-comp';
// import { TypeChecking2Comp } from './type-checking2-comp/type-checking2-comp';
// import { InterfaceClassComp } from './interface-class-comp/interface-class-comp';
import { FormValidationComp } from './form-validation-comp/form-validation-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormValidationComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myProject');
}
