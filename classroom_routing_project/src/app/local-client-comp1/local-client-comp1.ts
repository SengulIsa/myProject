import { Component } from '@angular/core';
import { LocalCounterViewComp } from '../local-counter-view-comp/local-counter-view-comp';

@Component({
  selector: 'app-local-client-comp1',
  imports: [LocalCounterViewComp],
  templateUrl: './local-client-comp1.html',
  styleUrl: './local-client-comp1.css',
})
export class LocalClientComp1 {
}
