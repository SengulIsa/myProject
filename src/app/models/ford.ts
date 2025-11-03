import { Car } from "./car";

export class Ford implements Car{
    automatic: boolean = false;
    sunroof: boolean = false;
    color: string ="red";
    velocity: number = 200;
    brand: string ="ford";
    model: string ="Taunus";
    year: number =2025;
    automaticPark(): void {
        alert("Otomatik park ediyorum");
    }
    changeDirection(): string {
        return "Sağa dönüyorum";
    }
    move(): string {
        return "Hareket ediyorum";
    }
}