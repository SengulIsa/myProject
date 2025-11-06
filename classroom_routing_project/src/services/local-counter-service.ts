import { Injectable } from "@angular/core";

// bu şekilde global servis olmaz nerde provide edilirse orda olur
@Injectable()
export class LocalCounterService{
   id =Math.floor(Math.random()*10000); 
   private counter =0;

     increment (){
        this.counter++;
     }

     getCounter (): number{
        return this.counter;
     }

     getId () :number {
         return this.id;
     }
}