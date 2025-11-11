import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { firstValueFrom } from "rxjs";

const baseUrl = "https://simple-books-api.glitch.me";

@Injectable({providedIn:'root'})
export class BooksHttpService{
 constructor(public http:HttpClient){}
    status :string ="";
async getStatus (){
        try {
           this.status= await firstValueFrom(this.http.get<string>(baseUrl + "/status")) ;
           alert("status :"+ JSON.stringify(this.status));
        } catch (error :any) {
            alert("http metodu hata verdi !...")
        }
 }
}