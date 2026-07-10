type Person={
    name:string;
    age:number;
    email:string;
    contactNo?:string;
}

// pick type
// type Name=Pick<Person, "name" | "age" | "contactNo">;

// // omit type
// type ContactInfo=Omit<Person, "name" | "age">

// // Required
// type PersonRequired=Required<Person>;

// perstial/optional
type OptionalPerson=Partial<Person>;

// readonly

type PersonReadonly=Readonly<Person>;

// const person:Person={
//     name:"Karim Khan",
//     age:34,
//     email:"karimkhan34@gmail.com",
//     contactNo:"454656345",
// }

const personReadonly:PersonReadonly={
    name:"Karim Khan",
    age:34,
    email:"karimkhan34@gmail.com",
    contactNo:"454656345",
}


// record type
// type MyObj={
//     a:string;
//     b:string;
// }

type MyObj1=Record<string, string>;



const myObject:MyObj1={
    a:"aa",
    b:"sds"
}

const myObj5:Record<string, number>={
    id:4546,
    age:45
}