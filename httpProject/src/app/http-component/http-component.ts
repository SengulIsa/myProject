import { Component } from '@angular/core';
import { BooksHttpService } from '../services/books-http-service';

@Component({
  selector: 'app-http-component',
  imports: [],
  templateUrl: './http-component.html',
  styleUrl: './http-component.css',
})
export class HttpComponent {
  constructor(public booksHttp:BooksHttpService){}
  load(){
    this.booksHttp.getStatus();
  }
}
