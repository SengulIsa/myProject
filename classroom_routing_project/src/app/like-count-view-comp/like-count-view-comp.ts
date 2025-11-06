import { Component } from '@angular/core';
import { LikeCounterService } from '../../services/like-count-service';

@Component({
  selector: 'app-like-count-view-comp',
  imports: [],
  providers:[LikeCounterService],
  templateUrl: './like-count-view-comp.html',
  styleUrl: './like-count-view-comp.css',
})
export class LikeCountViewComp {
  constructor(public counter : LikeCounterService){}
}
