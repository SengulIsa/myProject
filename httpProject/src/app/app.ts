import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpComponent } from './http-component/http-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpProject');
}
