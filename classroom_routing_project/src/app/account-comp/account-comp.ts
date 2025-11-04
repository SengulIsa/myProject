import { Component } from '@angular/core';

@Component({
  selector: 'app-account-comp',
  imports: [],
  templateUrl: './account-comp.html',
  styleUrl: './account-comp.css',
})
export class AccountComp {
 accounts =[
  {accountNumber:1,balance:10000,branchCode:251,name:"Bahadır Özütam"},
  {accountNumber:2,balance:1000,branchCode:251,name:"Emre Kart"},
  {accountNumber:3,balance:150062,branchCode:251,name:"İsa Şengül"},
 ]
}
