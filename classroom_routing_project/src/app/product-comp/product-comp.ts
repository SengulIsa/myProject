import { Component } from '@angular/core';

@Component({
  selector: 'app-product-comp',
  imports: [],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp {
  products =[
    {productCode :1, productName:"Telefon"},
    {productCode :2, productName:"Gömlek"},
    {productCode :3, productName:"Ayakkabı"},
    {productCode :4, productName:"Kulaklık"},
    
   ]
}
