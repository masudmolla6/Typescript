// conditional type
type A2=number;
type B3=boolean;

type D4=A2 extends number ? number : string;


type Sheikh={
    bike:string;
    car:string;
    ship:string;
}

type CheckVehicle<T>=T extends keyof Sheikh ? true : false;

type HasBike=CheckVehicle<"bike">;



