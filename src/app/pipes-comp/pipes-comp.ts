import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
//import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { CommonModule } from '@angular/common';  // tüm pipe ları karşılar tek bunu yazmak da yeter
import { MyPipe } from '../custom-pipe';

@Component({
  selector: 'pipes-comp',
   imports: [/*DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe,*/CommonModule,MyPipe],
  templateUrl: './pipes-comp.html',
  styleUrl: './pipes-comp.css',
})
export class PipesComp {
  today: Date = new Date();
  //  constructor(){
  //   this.today.setMonth(3);  // ay değiştirme
  //  }
  text = 'Text tipinde denemele için bu metni kullanacağız';
  num: number = 22500.3346;

  product = {
    id: 1,
    name: 'Şapka',
    price: 500,
  };
  products= [
    {
      id: 1,
      name: 'Şapka',
      price: 500
    },
    {
      id: 2,
      name: 'Eldiven',
      price: 600
    },
    {
      id: 3,
      name: 'Atkı',
      price: 700
    }
  
  ]
}


