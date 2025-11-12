import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'tasklist-child-comp',
  imports: [FormsModule],
  templateUrl: './tasklist-child-comp.html',
  styleUrl: './tasklist-child-comp.css',
})
export class TasklistChildComp {
  //parentten task bilgisini alıyoruz child componentte veriyoruz task bilgisini
  @Input() task:any;


  // alınan task değerinin güncellenmiş halini geri child a gönderiyoruz
  @Output() saved=new EventEmitter<any>();
  @Output() canceled = new EventEmitter<void>();
  save(){
    this.saved.emit(this.task);
  }
  cancel(){
    this.canceled.emit();
  }
}
