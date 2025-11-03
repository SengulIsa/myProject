import { Component, EventEmitter, Output , Input } from '@angular/core';

@Component({
  selector: 'child-output-comp',
  imports: [],
  template: 
  `
    <button (click) ="buttonClicked()">Clicked {{count}} times </button>
  `,

})
export class ChildOutputComp {
 @Output()
 clicked = new  EventEmitter();
   @Input()
    step =1;
 count =0;
  buttonClicked (){
  
    this.count += this.step;
    this.clicked.emit(this.count);
 }
}


@Component({
  selector: 'parent-output-comp',
  imports: [ChildOutputComp],
  template: 
  `
    <child-output-comp [step] = "2" (clicked)="onChildClick($event)"></child-output-comp>
    <p>From Parent : Child informed that {{lastCount}} times clicked </p>
  `,

})
export class ParentOutputComp {
  lastCount =0;

  onChildClick (n:number){
    this.lastCount = n;
  }
}

