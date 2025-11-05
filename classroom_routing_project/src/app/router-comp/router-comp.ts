import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive} from '@angular/router';
import { LoginComp } from '../login-comp/login-comp';

@Component({
  selector: 'app-router-comp',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,LoginComp],
  templateUrl: './router-comp.html',
  styleUrl: './router-comp.css',
})
export class RouterComp {
 
}
