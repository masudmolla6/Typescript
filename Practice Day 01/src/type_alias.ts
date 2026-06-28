type MyFriend=string;
const myFriend:MyFriend="Karim uddin";

type IsAdmin=boolean;
const isAdmin:IsAdmin=true;

type Roll=number;
const roll:Roll=23;

type MyInfo={
    myName:string;
    id:number;
    department:string;
    contact:string;
}

const myInfo:MyInfo={
    myName:"Masud Rana",
    id:23,
    department:"Nothing",
    contact:"0135454566",
}

type Add=(num1:number, num2:number)=> number;

const add:Add=(num1, num2)=>{
    return num1+num2;
}
