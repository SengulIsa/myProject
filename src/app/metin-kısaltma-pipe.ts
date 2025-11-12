import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'short',standalone:true})
export class MetinKısaltmaPipe implements PipeTransform{
  transform(value:string) : string{
    //let newValue ="";
    let kısaltılmışMetin ="";
    if(value==""){
        return "";
    }
    else{
        kısaltılmışMetin = value.substring(0,10)+ '...';
    }
       
    return kısaltılmışMetin;
  }
}