//   1-Object Destructuring
const myInfo = {
    id: 67,
    myName: {
        firstName: "Masud",
        lastName: "Rana",
    },
    dept: "CSE",
};
const { id, myName: { firstName, lastName } } = myInfo;
const numbers = [1, 2, 34, 5, 7];
const [, a, ...rest] = numbers;
console.log(numbers);
export {};
