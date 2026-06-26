// function add(number1:number, number2:number):number{
//     return number1+number2;
// }
const add = (number1, number2) => {
    return number1 + number2;
};
const myInfo = {
    myName: "Masud Rana",
    balance: 0,
    addBalance(addBalance) {
        return addBalance + this.balance;
    }
};
const numbers = [2, 3, 4, 5, 6, 7];
const newArray = numbers.map((num) => {
    return num * num;
});
export {};
