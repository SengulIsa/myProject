import { Injectable } from "@angular/core";
import { Product } from "../app/model/product";



@Injectable({providedIn:'root'})
export class CartService{
   private items : Product[]  =[];
   private totalPrice =0;

   constructor(){};

   addToCart(product:Product){
    this.items.push(product);
    // this.totalPrice=0;
    // for(let item of this.items){
    //     this.totalPrice += item.price;
    // }
    this.totalPrice += product.price;
   }

   getItems() : Product[]{
    return this.items;
   }
   getTotalPrice(): number{
    return this.totalPrice;
   }
}