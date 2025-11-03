import { Component } from '@angular/core';
import { Ford } from '../models/ford';
import { Car } from '../models/car';
import { Vehicle } from '../models/vehicle';
import { Bus } from '../models/bus';
import { Mercedes } from '../models/mercedes';
import { RealVehicle } from '../models/realVehicle';

@Component({
  selector: 'type-checking2-comp',
  imports: [],
  templateUrl: './type-checking2-comp.html',
  styleUrl: './type-checking2-comp.css',
})
export class TypeChecking2Comp {
  myVehicle :Vehicle = new Ford();
  myCar :Car = new Ford();
  myBus : Bus = new Mercedes();
  show(){
  //   alert("myVehicle : "+this.myVehicle.move());
  //  alert("myCar : "+this.myCar.changeDirection());
  //  alert("myCar : "+this.myCar.move());
  //  this.myCar.automaticPark();

  //  alert("myBus :"+this.myBus.openDoors());
  //  alert("myVehicle : "+this.myVehicle.move());

  type newCar = Vehicle & {motorNo:boolean};
 const  myNewCar:newCar ={
    motorNo :false,
    color : "red",
    velocity : 200,
    brand :"ford",
    model :"Taunus",
    year : 2025,
    move() : string {
      return "Hareket ediyorum";
    }
  }
 // alert("My newCar :" + myNewCar.move());

     let status : string | number;
     status="deneme";
     status =10;

     type statusType = "success" | "Error";   // bu şekilde tipleme yapıp o tipten değişken üretebilirz ama alacağı değerler bellidir.
     let myStatus : statusType ="Error";
  }
  getVehicleProperties(v:Vehicle):void {
    //v.move();
    if(v instanceof Ford){
      (v as Ford).automaticPark();   // vehicle olan bir şey car özelliğini alamaz ama car olanlar vehicle dan kalıtım aldığı için o özellikleri alır 
    }
    else{
      alert("Geçerli değil")
    }
    }
     


   myRealVehicle = new RealVehicle;
  show2 (){
   // this.getVehicleProperties(this.myRealVehicle);  // vehicle ford tipi  olamaz
    this.getVehicleProperties(this.myCar);  // car ford olabilir

   let myCar3:Partial<Car> = {};   // car için zorunlu alanlar oolmasına rağmen partial ile boş gönderebiliriz optional yapar
    myCar3.automatic = false;
    myCar3.sunroof =true;


    // let myCar4:Required<Car> = {   // her alan zorunlu olur eğer özellikle sınıfta optional yoksa
    //   automatic :true,
    //   sunroof : false,
    //   color :"red",
    //   velocity :200,

    //   changeDirection(){
        
    //   },
    //   automaticPark():void;
    // };   
    type Primitive = string | number |boolean;
   let  var1 : Primitive ="";
   type Primitive2=Exclude<Primitive,string>;   // string veri tipini siler number ve boolean kalır
   //let var2 : Primitive2 ="";  // hata verir
  let var2 =15;
  }




  
}
