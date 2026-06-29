// object--> type & interface

type MyInfo={
    myName:string;
    id:number;
}

interface MyInfo1{
    myName:string;
    id:number;
}

// type MyInfoWithDept=MyInfo1 & {
//     dept:string;
// }

interface MyInfoWithDept extends MyInfo {
    dept:string;
}

const myInfo:MyInfoWithDept={
    myName:"Masud Rana",
    id:3445,
    dept:"Cse",
}

// Array --> type & interface 
type Roll1=number[];

interface Roll2{
    [index:number]:number;
}

// const rollNumber:Roll1=[12,3,4,5,5,6];
const rollNumber:Roll2=[12,3,4,5,5,6];

// function --> type & interface 

type Add1=(num1:number, num2:number)=>number;
interface Add2{
    (num1:number, num2:number): number;
}

const add:Add2=(num1, num2)=>num1+num2;