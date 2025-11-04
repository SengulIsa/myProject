import { Component, } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'product-form-comp',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form-comp.html',
  styleUrl: './product-form-comp.css',
})
export class ProductFormComp {
  fb = new FormBuilder();
  submitted = false;
  form = this.fb.group({
    urunAd:['',[Validators.required]],
    urunAdet :[0,[Validators.required,Validators.min(1)]],
    birimFiyat : [0,[Validators.required, Validators.min(1)]],
    indirim :[0,[Validators.required,Validators.min(0),Validators.max(80)]]
  })
  adet =0;
  birim = 0;
  indirimDegeri=0;
  toplam=0;
  
  calculate(): string{
    this.toplam = this.adet * (this.birim-(this.birim * this.indirimDegeri/100));
    
   if(this.adet <0){ return `Hatalı adet girişinden dolayı Toplam hesaplanamaz`}
   else if(this.birim <0){ return `Hatalı birim girişinden dolayı Toplam hesaplanamaz`}
   else if(this.indirimDegeri <0){ return `Hatalı indirim girişinden dolayı Toplam hesaplanamaz`}
    return `${this.toplam} $`
  }
  onSubmit(){
    this.submitted=true;
    this.form.reset();
  }
}
