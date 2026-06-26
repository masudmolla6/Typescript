// function add(number1:number, number2:number):number{
//     return number1+number2;
// }

const add=(number1:number, number2:number):number=>{
    return number1+number2;
}

const myInfo={
    myName:"Masud Rana",
    balance:0,
    addBalance(addBalance:number):number{
        return addBalance+this.balance;
    }
}

const numbers:number[]=[2,3,4,5,6,7];

const newArray:number[]=numbers.map((num:number):number=>{
    return num*num;
})