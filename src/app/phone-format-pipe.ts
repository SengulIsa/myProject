import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'phoneformat',standalone:true})
export class PhonePipe implements PipeTransform{
  transform(value:string) : string{
    //let newValue ="";
    let formatValue =""
    if(value ==""){
      formatValue = 'Telefon numarası giriniz...'
    }
    else{
      formatValue += '('+ value.substring(0,3) +')' + ' ' + value.substring(3,6) +' '+ value.substring(6,8) + ' ' +value.substring(8)

    }
    return formatValue;
  }
}