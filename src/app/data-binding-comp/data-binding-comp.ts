import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding-comp',
  imports: [FormsModule],
  templateUrl: './data-binding-comp.html',
  
})
export class DataBindingComp {
  isDisabled = false;
  myName ="";
  surname ="";
  nameChanged(e : Event){
    this.myName =(e.target as HTMLInputElement).value;
  }
}
