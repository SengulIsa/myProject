import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive} from '@angular/router';
import { LoginComp } from '../login-comp/login-comp';
import { CardComp } from '../card-comp/card-comp';
import { LocalCounterService } from '../../services/local-counter-service';
import { CounterClient1 } from '../counter-client1/counter-client1';
import { CounterClient2 } from '../counter-client2/counter-client2';
import { LocalClientComp1 } from '../local-client-comp1/local-client-comp1';
import { LocalClientComp2 } from '../local-client-comp2/local-client-comp2';



@Component({
  selector: 'app-router-comp',
  providers : [LocalCounterService],
  imports: [RouterOutlet,RouterLink,RouterLinkActive,LoginComp,CardComp,/*CounterClient1,CounterClient2,LocalClientComp1,LocalClientComp2*/],
  templateUrl: './router-comp.html',
  styleUrl: './router-comp.css',
})
export class RouterComp {
  constructor(public counter :LocalCounterService){}
 
 
}
