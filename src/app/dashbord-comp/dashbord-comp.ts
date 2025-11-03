import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dashbord-comp',
  imports: [FormsModule],
  templateUrl: './dashbord-comp.html',
  styleUrl: './dashbord-comp.css',
})
export class DashbordComp {
 activeButton : string ="anasayfa";
  myProducts = [{id:1,name:"laptop",price :"25000 TL"},{id:2,name:"Mouse",price :"500 TL"},{id:3,name:"Klavye",price :"1500 TL"}]
 showContent(content : string){
  this.activeButton = content;
 }
}
