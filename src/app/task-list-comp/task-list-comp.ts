import { Component } from '@angular/core';

export enum TaskStatus {
  Pending ="Pending",
  InProgress ="In Progress",
  Done = "Done"
}


@Component({
  selector: 'task-list-comp',
  imports: [],
  templateUrl: './task-list-comp.html',
  styleUrl: './task-list-comp.css'
})



// export class Task {
//   id:number =0;
//   title:string ="";
//   status : TaskStatus =TaskStatus.Pending;
// }
export class TaskListComp {
  tasks =[
    {id :1,title :"Anasayfayı tasarla",status :TaskStatus.Pending},
      {id :2,title :"API Geliştir",status :TaskStatus.InProgress},
    {id :3,title :"Projeyi sunucuya yükle",status :TaskStatus.Done}
   ];
   
   changeStatus (task :any){
     if(task.status == TaskStatus.Pending){task.status = TaskStatus.InProgress}
    else if(task.status == TaskStatus.InProgress){task.status = TaskStatus.Done}
    else if(task.status == TaskStatus.Done){task.status = TaskStatus.Pending}
   }
}
