import { Vehicle } from "./vehicle";

export class RealVehicle implements Vehicle {
    color: string ="red";
    velocity: number = 200;
    brand: string ="ford";
    model: string ="Taunus";
    year: number =2025;
  
    move(): string {
        return "real vehicle hareket ediyoruım"
    };
    
}