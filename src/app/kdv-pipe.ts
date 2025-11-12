import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'kdvcalculate',standalone:true})
export class KdvPipe implements PipeTransform{
  transform(value:number) : number{
    //let newValue ="";
     value += value*0.18;
       
    return value;
  }
}