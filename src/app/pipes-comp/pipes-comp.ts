import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
//import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { CommonModule } from '@angular/common';  // tüm pipe ları karşılar tek bunu yazmak da yeter
import { MyPipe } from '../custom-pipe';
import { PhonePipe } from '../phone-format-pipe';
import { SansurPipe } from '../sansür-pipe';
import { KdvPipe } from '../kdv-pipe';
import { MetinKısaltmaPipe } from '../metin-kısaltma-pipe';
import { ListeFiltrelemePipe } from '../liste-filtreleme-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pipes-comp',
   imports: [/*DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe,*/CommonModule,MyPipe,PhonePipe,SansurPipe,KdvPipe,MetinKısaltmaPipe,ListeFiltrelemePipe,FormsModule],
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
  phone ='';
  sansur ='';
  kdv  =0;
  metin ='';
  searchText ='';
  list = ['ali','veli','ayşe','fatma','isa','musa'];


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


