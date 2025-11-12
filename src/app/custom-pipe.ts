import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'mypipeoverstrings',standalone:true})
export class MyPipe implements PipeTransform{
  transform(value:string) : string{
    //let newValue ="";
    for(let i =0; i<value.length; i++){
        if(i % 2 ==0){
          //  newValue += value[i].toUpperCase();
            value = value.substring(0,i) + value.substring(i,i+1).toUpperCase()+ value.substring(i+1);
        }
        else{
            //newValue += value[i].toLowerCase();
            value = value.substring(0,i) + value.substring(i,i+1).toLowerCase()+ value.substring(i+1);
        }

    }
    return value;
  }
}