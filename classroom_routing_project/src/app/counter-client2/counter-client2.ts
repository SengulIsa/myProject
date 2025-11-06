import { Component } from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Component({
  selector: 'app-counter-client2',
  imports: [],
  templateUrl: './counter-client2.html',
  styleUrl: './counter-client2.css',
})
export class CounterClient2 {
  constructor(public counter : CounterService){}
  myCount =0;
  myUpdate (){
  this.myCount=  this.counter.getCounter();
  } 
}
