import { Component } from '@angular/core';
import { Person } from '../models/person';
import { Employee } from '../models/employee';
import { Manager } from '../models/manager';

@Component({
  selector: 'interface-class-comp',
  imports: [],
  templateUrl: './interface-class-comp.html',
  styleUrl: './interface-class-comp.css',
})

export class InterfaceClassComp {
person : Person = new Employee("Ahmet",20000);
person1 : Person = new Employee("Ayşe",21000);
person2 : Employee = new Manager("Mehmet",30000);
 
persons =[this.person,this.person1,this.person2];
}
