import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterComp } from './router-comp/router-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('classroom_routing_project');
}
