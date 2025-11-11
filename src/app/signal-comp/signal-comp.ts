import { Component } from '@angular/core';
import { signal,computed,effect } from '@angular/core';



@Component({
  selector: 'signal-comp',
  imports: [],
  templateUrl: './signal-comp.html',
  styleUrl: './signal-comp.css',
})
export class SignalComp {
   x = signal<string[]>([]);
  y :string[]= ["bir","iki"];
  changeX(){
   this.x.set(this.y);
  }
  // addX(){
  //   this.x.update(()=> {this.y.push("üç")});
  // }
  a = signal(2);
  b = signal(3);

  sum = computed(()=> this.a() +  this.b());
  constructor(){
    effect(()=> console.log("Değer değişince toplam yeniden hesaplandı :" + this.sum() )   // effect sinyal değeri değişince tetiklenir çalışır

    )
  }


  incrementA(){
    //this.a.update(n => n+1);
    this.a.set(this.a() + 1);
  }
  incrementB(){
   // this.b.update(n => n+1);
    this.b.set(this.b() + 1);
  }
}
