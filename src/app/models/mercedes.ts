import { Bus } from "./bus";

export class Mercedes implements Bus {
    inecekVar :boolean = true;
    openDoors():string{
        return "Kapılar açılır."
    };
    move(): string {
        return "Hareket eder."
    };
    automatic : boolean = false;
    sunroof :boolean = false;
    color : string ="yellow";
    velocity : number = 150;
    brand : string ="Mercedes";
    model :string ="O301";
    year : number = 2025;
}