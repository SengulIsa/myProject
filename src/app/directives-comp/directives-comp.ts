import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'directives-comp',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives-comp.html',
  styleUrl: './directives-comp.css',
})
export class DirectivesComp {
//  myItems : string[]= [];
myIndex = 0;
myItems : string[]= ["Angular","Component","Directives"];
}
