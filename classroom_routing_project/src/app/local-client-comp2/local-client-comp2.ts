import { Component } from '@angular/core';
import { LocalCounterViewComp } from '../local-counter-view-comp/local-counter-view-comp';

@Component({
  selector: 'app-local-client-comp2',
  imports: [LocalCounterViewComp],
  templateUrl: './local-client-comp2.html',
  styleUrl: './local-client-comp2.css',
})
export class LocalClientComp2 {

}
