import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'sansur',standalone:true})
export class SansurPipe implements PipeTransform{
  transform(value:string) : string{
    let sansurValue ="";
   const sansurWords = ['küfür','yasak','argo','hakaret']
        for(let i=0; i<sansurWords.length;i++){
          if(value.includes(sansurWords[i])){
           value= value.replace(sansurWords[i],'***');
          }
          sansurValue = value;
        }

       
    return sansurValue;
  }
}