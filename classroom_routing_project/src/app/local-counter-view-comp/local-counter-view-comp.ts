import { Component } from '@angular/core';
import { LocalCounterService } from '../../services/local-counter-service';

@Component({
  selector: 'app-local-counter-view-comp',
  imports: [],
  providers : [LocalCounterService],
  templateUrl: './local-counter-view-comp.html',
  styleUrl: './local-counter-view-comp.css',
})
export class LocalCounterViewComp {
  constructor(public counter :LocalCounterService){}
}
