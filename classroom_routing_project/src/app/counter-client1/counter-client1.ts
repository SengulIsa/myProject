import { Component } from '@angular/core';
import { CounterService } from '../../services/counter-service';


@Component({
  selector: 'app-counter-client1',
  imports: [],
  templateUrl: './counter-client1.html',
  styleUrl: './counter-client1.css',
})
export class CounterClient1 {
  constructor(public counter : CounterService){}
  myCount =0;
  myUpdate (){
  this.myCount=  this.counter.getCounter();
  } 
}
