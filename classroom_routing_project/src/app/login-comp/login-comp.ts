import { Component } from '@angular/core';

@Component({
  selector: 'login-comp',
  imports: [],
  templateUrl: './login-comp.html',
  styleUrl: './login-comp.css',
})
export class LoginComp {
  username ="İsa Şengül";
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
