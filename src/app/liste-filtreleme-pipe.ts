import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'filter',standalone:true})
export class ListeFiltrelemePipe implements PipeTransform{
    //ilk parametre pipe ın kullanıldığı yerde ilk yazılan ikincisi ise pipe adından sonra : ile yazılır
  transform(filterArray:string[],searchText:string){
    if(searchText== ""){
        return '';
    }
    
        filterArray = filterArray.filter(item=>item.toLowerCase().includes(searchText.toLowerCase()));

        return filterArray;
  }
}