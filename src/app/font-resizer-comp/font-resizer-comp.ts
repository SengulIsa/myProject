import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'font-resizer-comp',
  imports: [FormsModule],
  templateUrl: './font-resizer-comp.html',
  styleUrl: './font-resizer-comp.css',
})
export class FontResizerComp {
  fontSize =24;
  fontSizeNgModel =24;
  isNgModel = false;
  onInput(e : Event){
    this.isNgModel = false;
    this.fontSize =parseInt((e.target as HTMLInputElement).value);
  }
}
