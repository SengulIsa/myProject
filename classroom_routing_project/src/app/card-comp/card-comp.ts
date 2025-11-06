import { Component , OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Product } from '../model/product';
import { LikeCountViewComp } from '../like-count-view-comp/like-count-view-comp';

@Component({
  selector: 'card-comp',
  imports: [CommonModule,LikeCountViewComp],
  templateUrl: './card-comp.html',
  styleUrl: './card-comp.css',
})
export class CardComp {
  // items : Product[] =[];
  // totalPrice =0;

  constructor(public cartService : CartService){}
  
  get items() : Product[]{
    return this.cartService.getItems();
  }
  get totalPrice() : number{
    return this.cartService.getTotalPrice();
  }

  //  ngOnInit(): void {
  //     this.items = this.cartService.getItems();
  //     this.totalPrice = this.cartService.getTotalPrice();
  //   }
  

}
