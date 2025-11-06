import { Component , Output , Input, EventEmitter  } from '@angular/core';
import { LikeCountViewComp } from '../like-count-view-comp/like-count-view-comp';



@Component({
  selector: 'login-comp',
  imports: [LikeCountViewComp,LikeCountViewComp],
  templateUrl: './login-comp.html',
  styleUrl: './login-comp.css',
})
export class LoginComp {
  username ="Giriş yapın";
  buttonValue = "Giriş";
  clickButton(){
    if(this.username =="İsa Şengül"){
      this.username = "Giriş yapın"
      this.buttonValue = "Giriş";
     
    }
    else {
      this.username ="İsa Şengül";
      this.buttonValue = "Çıkış";
    }
  }
}

