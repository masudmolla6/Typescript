// Generic Array.
type genericArray<T>=Array<T>

const numbers:genericArray<number>=[1,2,3,4,5,67];
const students:genericArray<string>=["Karim", "Rahim", "Rahul"];
const boolArray:genericArray<boolean>=[true, false, true];

// for(const num in numbers){
//     console.log(num);
// }

// Generic Array of object

type genericArrayOfObject<T>=Array<T>;
const user:genericArrayOfObject<{name:string, id:number}>=[
    {
        name:"masud",
        id:45,
    },{
        name:"Masud Rana",
        id:45,
    }
]

// Generic Tuple
type GenericTuple<x,y>=[x,y];

// const myInfo:GenericTuple<string,number>=[
//     "Masud Rana",
//     3465767
// ]

type GenericTupleWithUserId<x,y>=[x,y];

const userWithId:GenericTupleWithUserId<number,{myName:string, id:number}>=[
    12,{
        myName:"Masud Rana",
        id:34,
    }
]
