import { Component } from '@angular/core';

@Component({
  selector: 'type-checking-comp',
  imports: [],
  templateUrl: './type-checking-comp.html',
  styleUrl: './type-checking-comp.css',
})

export class TypeCheckingComp {
  name = "Bahadır";
  address: string | number = "";
  n1 : string | number | boolean = true;
  n2 : string | number = "";

  n1Any : any; 
  n2Any : any; 

  user = {
    name: "Özgür", 
    address1 : {
//      street:"Atay cad.",
      apartment:38
    }
  }

  products:string[] = [];
  
  show() {
    this.name = "Bahadır";
    //this.name = param1;

    //alert("String ile --> " + this.addS("5", "3"));
    //alert("Number ile --> " + this.add(5, 3));,

    this.address = "Kadıköy";
    this.address = 34760;

    this.n1 = "dcvfda";
    this.n2 = "ggt";
    //alert("String ile -->" + this.addS(this.n1, this.n2));

    this.n1 = 5;
    this.n2 = 3;
    //alert("number ile -->" + this.add(this.n1, this.n2));

    this.n1Any = "false";
    this.n2Any = 98; 

    //alert("String ile -->" + this.addS(this.n1Any, this.n2Any));
    //alert("Number ile -->" + this.add(this.n1Any, this.n2Any));

  //  alert("String ile --> " + this.dealWithUnknownParameter("Kadıköy"));
  //  alert("Number ile --> " + this.dealWithUnknownParameter(81));
  //  alert("boolean ile --> " + this.dealWithUnknownParameter(false));

  //alert("String ile --> " + this.addWithTypes("Kadıköy", " çok güzel"));
  //alert("Number ile --> " + this.addWithTypes(81, 98));
  //alert("boolean ile --> " + this.addWithTypes(false, 78));

  //alert("Parametre verilince --> " + this.tebrikEt("Olcay"));
  //alert("Parametre verilmeden --> " + this.tebrikEt());

  //alert("Parametre verilince --> " + this.tebrikEtWithNull("Olcay"));
  //alert("Parametre verilmeden --> " + this.tebrikEtWithNull());

  //alert(this.getTheAdress(null /*this.user*/)); 

//  this.products = ["product1", "product2", "product3"]; 
  //this.products = []; 
  //alert(this.getTheProducts(this.products));

  let myArray:string[] = [];
  myArray.push("Emre");
  myArray.push("9");
  //alert(typeof myArray[0] + "," + typeof myArray[1]);

  let myArray2 = [1, 2, 3];
  myArray2.push(4);
  //myArray2.push("9");
  //alert(typeof myArray2[0] + "," + typeof myArray2[1]);

  let myArray3: string[] = ["Beyza"];
  myArray3.push("Emre");
  myArray3.push("9");
  //alert(typeof myArray[0] + "," + typeof myArray[1]);

    let myTuple:[boolean, boolean, string, number] = [true, true, "Ronay", 80];
    myTuple.push("İpek");
    //alert(myTuple.pop() + " length=" + myTuple.length);
    //alert(myTuple.pop() + " length=" + myTuple.length);
    //alert(myTuple.pop() + " length=" + myTuple.length);
    //alert(myTuple.pop() + " length=" + myTuple.length);
    //myTuple[4] = "89";

    let isItVisible:boolean = true;
    let isItEditable:boolean = false;
    let name = "Halil";
    let examNote = 10;

    [isItVisible, isItEditable, name, examNote] = myTuple;
    //alert("isItVisible=" + isItVisible + ",isItEditable=" + isItEditable + ",name=" + name + ",examNote=" + examNote);

    let today:WeekDays = WeekDays.Tuesday;
    alert("Bugün = " + today + ", " + WeekDays.Monday + "'den sonraki gün"); 
  }

  add(s1:number, s2:number) {
    return s1 + s2; 
  }

  addS(s1:string, s2:string) {
    return s1 + s2; 
  }

  dealWithUnknownParameter(param:unknown) {
      if (typeof param === "string") {
        return param.substring(0, 2); 
      } else if (typeof param === "number") {
        return Math.sqrt(param); 
      } else {
        return "Param type is unknown and not string or number: " + param;
      }
  }

  addWithTypes(param1:unknown, param2:unknown) {
    if (typeof param1 === "string" && typeof param2 === "string" ) {
      return param1 + param2;  
    } else if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2; 
    } else {
      return "Param1 and param2 types are unknown and not string or number: param1 = " + param1 + ", param2 = " + param2;
    }
  }

  tebrikEt(name?:string) {
    if (name) {
      return "Tebrik ederim " + name;
    } else {
      return "Tebrik ederim yabancı";
    }
  //  return `Tebrik ederim ${name || 'yabancı'}`;
  }

  tebrikEtWithNull(name?:string) {
    return "Tebrik ederim " + (name ?? " yabancı");
  }
  getTheAdress(user:any) {
  //  return user?.address?.street; 
    if (user) {
      if (user.address) {
          return user.address.street; 
      } else {
          return "Adres tanımlı değil";
      }
    } else {
      return "Kullanıcı tanımlı değil";
    }

  }

  getTheProducts(products:any) {
    return products?.[0];
  }  
}

enum WeekDays {
  Monday="1. gün", Tuesday="4. gün", Wednesday="7. gün", Thursday="5. gün", Friday="2. gün", Saturday="3. gün", Sunday="6. gün"
}
