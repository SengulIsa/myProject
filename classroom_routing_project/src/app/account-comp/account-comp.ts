import { Component,inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute , RouterLink , Router } from '@angular/router';

@Component({
  selector: 'app-account-comp',
  imports: [RouterLink],
  templateUrl: './account-comp.html',
  styleUrl: './account-comp.css',
})
export class AccountComp implements OnInit {
  account =-1;
  selectedAccount = {accountNumber:0,balance:0,branchCode:0,name:""}
  private route = inject(ActivatedRoute)  
  private router = inject(Router)  
 accounts =[
  {accountNumber:0,balance:10000,branchCode:251,name:"Bahadır Özütam"},
  {accountNumber:1,balance:1000,branchCode:251,name:"Emre Kart"},
  {accountNumber:2,balance:150062,branchCode:251,name:"İsa Şengül"},
 ]
 // account urlinde gelen parametreyi account değişkenine atama işlemi
 ngOnInit(): void {
   this.account = Number(this.route.snapshot.paramMap.get('account') ?? '-1');
   if(this.account < -1){
    this.router.navigate(['/']);
   }
   for(let acc of this.accounts){
    if(this.account == acc.accountNumber){
      this.selectedAccount = acc;
    }
   }
 }
}
