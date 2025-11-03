import { Vehicle } from "./vehicle";

export interface Bus extends Vehicle {
    inecekVar :boolean;
    openDoors():string;
}