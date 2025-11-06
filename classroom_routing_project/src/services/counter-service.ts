import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'}) // bu şekilde globale açıyoruz tümservisi
export class CounterService{
    private counter =0;

     increment (){
        this.counter++;
     }

     getCounter (): number{
        return this.counter;
     }
}