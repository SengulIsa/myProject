import { Component,inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute , RouterLink , Router } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-comp',
  imports: [RouterLink],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp {
  product =-1;
  selectedProduct = {productCode:0,productName:"",price:0,amount:0}
  private route = inject(ActivatedRoute) ;
  private router = inject(Router) ;

  constructor(public cartService : CartService){}

  products : Product[] =[
    new Product (1, "Telefon",1000, 14),
    new Product  (2,"Gömlek",2000,140),
    new Product  (3,"Ayakkabı",3000,13),
    new Product (4,"Kulaklık",4000,130)
   ]
   ngOnInit(): void {
    this.product = Number(this.route.snapshot.paramMap.get('product') ?? '-1');
    for(let prd of this.products){
     if(this.product == prd.productCode){
       this.selectedProduct = prd;
     }
    }

    if(this.product > this.products.length  || this.product <-1 || this.product == 0){
      this.router.navigate(["/error"]);
    }
  }
  addToCart (product : Product) {
    this.cartService.addToCart(product);
  }
}
