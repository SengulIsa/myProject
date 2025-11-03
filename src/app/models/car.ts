import { Vehicle } from "./vehicle";

export interface Car extends Vehicle {
    automatic : boolean;
    sunroof :boolean;
    changeDirection():string,
    automaticPark():void;
}