import { Person } from "./person";

export class Employee implements Person {
   constructor(public name:string,public salary:number){}
    getInfo(): string {
        return `Employee : ${this.name} | Salary : ${this.salary}`;
    }
}