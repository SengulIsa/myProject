import { Component } from '@angular/core';
import { TasklistChildComp } from '../tasklist-child-comp/tasklist-child-comp';

@Component({
  selector: 'app-tasklist-parent-comp',
  imports: [TasklistChildComp],
  templateUrl: './tasklist-parent-comp.html',
  styleUrl: './tasklist-parent-comp.css',
})
export class TasklistParentComp {
  tasks = [
    {id:1,title:'Angular çalış'},
    {id:2,title:'Ödevleri yap'},
    {id:3,title:'Mail kontrol et'},
    {id:4,title:'Köpeği gezdir'}
  ];

  selectedTask: any = null;

  editTask(task:any){
    this.selectedTask = {... task};
  }
  updateTask(updated:any){
    for(let task of this.tasks){
      if(task.id == updated.id){
        task.title = updated.title;
        this.selectedTask = null;
      }
    }
  }
  cancelEdition(){
    this.selectedTask=null;
  }
}
