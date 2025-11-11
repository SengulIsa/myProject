import { Component } from '@angular/core';
import { interval,map } from 'rxjs';
import {AsyncPipe,CommonModule} from '@angular/common';

@Component({
  selector: 'async-pipe-comp',
  imports: [AsyncPipe,CommonModule],
  templateUrl: './async-pipe-comp.html',
  styleUrl: './async-pipe-comp.css',
})
export class AsyncPipeComp {
  status$ = this.checkstatus();  // dolar işaretinin bi anlamı yok 
  counter =6;
  checkstatus(){
   return interval(1000).pipe(    // 1 saniyede bir mapi uygular
      map( ()=>{

        this.counter--;
        // simulate loading for 6 seconds
        if(this.counter>0){
          return {status : 'Yükleniyor '+ this.counter + ' saniye'};
        }

        // when ready
        return {status : 'Okey', data:'Veriler başarılı şekilde yüklendi.'}
      })
    )
  }
}
