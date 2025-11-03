import { Employee } from "./employee";

export class Manager extends Employee{
  bonus : number = 5000;
 override getInfo():string{
    return `Manager : ${this.name} | Salary : ${this.salary} | Bonus : ${this.bonus}`;
  }

}