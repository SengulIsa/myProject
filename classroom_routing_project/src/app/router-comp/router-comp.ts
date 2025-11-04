import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-router-comp',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './router-comp.html',
  styleUrl: './router-comp.css',
})
export class RouterComp {

}
