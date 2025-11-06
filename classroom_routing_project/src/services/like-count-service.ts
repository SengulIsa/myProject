import { Injectable } from "@angular/core";

// bu şekilde global servis olmaz nerde provide edilirse orda olur
@Injectable()
export class LikeCounterService{
   private counter =0;

     increment (){
        this.counter++;
     }

     getCounter (): number{
        return this.counter;
     }

}