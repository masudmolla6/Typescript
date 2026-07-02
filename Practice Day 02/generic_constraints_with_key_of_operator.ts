// type Vehicle={
//     bike:string;
//     car:string;
//     ship:string;
// }

// type Owner= "bike" | "car" | "ship"; //manually

// type Owner2=keyof Vehicle;

// console.log()


type Car = {
    brand: string;
    model: string;
    price: number;
    isElectric: boolean;
};

type MyCar="brand" | "model" | "price" | "isElectric";


type Student = {
    id: number;
    name: string;
    cgpa: number;
}

type StudentKeys = keyof Student;

const key: StudentKeys = "cgpa";

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type UserKeys=keyof User;

const getValue=<TUser,TKey extends keyof TUser>(user:TUser, key:TKey):TUser[TKey]=>{
    return user[key];
}

const result=getValue({id:345,name:"Masud Rana", email:"masud@gmail.com"}, "name");
// console.log(result);


const getResult=<TProduct, Tkey extends keyof TProduct>(product:TProduct, key:Tkey):TProduct[Tkey]=>{
    return product[key];
}
// TKey = Property-এর Name
// TProduct[TKey] = সেই Property-এর Value Type

const product = {
    id: 101,
    title: "Laptop",
    price: 50000,
    inStock: true
}

const result2=getResult(product, "title");

console.log(result2)

