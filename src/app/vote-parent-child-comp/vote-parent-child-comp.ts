import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'vote-child-comp',
  imports: [FormsModule],
  template:
  `
  <div class="card">
  <h2>Doğayı koruyalım </h2>
  <label>Bağış : </label>
  <input type="number" [(ngModel)]="donation" />  ₺
    <button (click) ="buttonClicked()">İmzalıyorum </button>
    </div>
  `
  ,
  styleUrl: './vote-parent-child-comp.css',
})
export class VoteChildComp {
  donation: number = 0;
   count : number =0;
 @Output()
 clicked = new  EventEmitter();
    buttonClicked() {
  this.count += 1;
  this.clicked.emit({ count: this.count, donation: this.donation });
}

}

@Component({
  selector: 'vote-parent-comp',
  imports: [VoteChildComp],
  template:
  `
  <h1> Kampanyamıza destek verin ! .... </h1>
  <p> Doğayı koruyalım kampanyası</p>
  <p>İmza syısı : {{signCount}} </p>
  <p> Bağış tutarı : {{donation}} ₺</p>
  
   <vote-child-comp (clicked)="onChildClicked($event)"></vote-child-comp>
  `
  ,
  styleUrl: './vote-parent-child-comp.css',
})
export class VoteParentComp {
  signCount =0;
  donation = 0;
onChildClicked(event : any) {
  this.signCount = event.count;
  this.donation += event.donation;
}

}
