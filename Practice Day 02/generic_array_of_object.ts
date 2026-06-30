type Product = {
  id: number;
  title: string;
  price: number;
};

type GenericArrayOfObject<T>=Array<T>;

const myProducts:GenericArrayOfObject<Product>=[
    {
        id:1,
        title:"laptop",
        price:654,
    },
    {
        id:2,
        title:"Watch",
        price:65454,
    },
    {
        id:3,
        title:"Bike",
        price:65453,
    }
]


// Multiple Parameter With Generic interface

interface Box<T,X>{
    id:number,
    name:string,
    favouritFood:T;
    computerParts:X;
}

interface FavouritFood{
    [index:number]:string ;
}

interface ComputerParts{
    [index:number]:string ;
}

const person1:Box<FavouritFood,ComputerParts>={
    id:23,
    name:"Sakib Khan",
    favouritFood:["orange", "mango", "apple"],
    computerParts:["cpu", "gpu", "ram"],
}

