import { Component } from '@angular/core';
import { ProductChildComp } from '../product-child-comp/product-child-comp';

@Component({
  selector: 'app-product-parent-comp',
  imports: [ProductChildComp],
  templateUrl: './product-parent-comp.html',
  styleUrl: './product-parent-comp.css',
})
export class ProductParentComp {
    products = [
      {id:1, name:'Kitap', price:350},
      {id:2, name:'Defter', price:150},
      {id:3, name:'Makas', price:50},
      {id:4, name:'Bant', price:40},
      {id:5, name:'Prit', price:20},
    ]

    selectedProduct:any = null;
    
    editProduct(product:any){
      this.selectedProduct={ ...product};
    }

    saveProduct(p:any){
      for(let product of this.products){
        if(product.id == p.id){
          product.name = p.name;
          product.price = p.price;
          this.selectedProduct= null;
        }
      }
      
    }

    cancelProduct(){
      this.selectedProduct=null;
    }
}
