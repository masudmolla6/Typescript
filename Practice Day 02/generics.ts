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

const myInfo:genericArray<string, number>=[{
    myName:"Masud Rana",
    contact:3465767
}]