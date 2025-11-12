import { Component,Input,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'product-child-comp',
  imports: [FormsModule],
  templateUrl: './product-child-comp.html',
  styleUrl: './product-child-comp.css',
})
export class ProductChildComp {
@Input() product:any;


@Output() saved = new EventEmitter<any>();
@Output () canceled = new EventEmitter<void>();

save(){
  this.saved.emit(this.product);
  
}
cancel(){
  this.canceled.emit();
}
}
