// practice 01
const makeArray = <T>(value:T) => {
    return [value];
}

const wrapString=makeArray("Masud");
const wrapNumber=makeArray(456);
const wrapBoolean=makeArray(true);
const wrapObject=makeArray({name:"Masud Rana", age:345});


// Practice 02

const getFirstElement=<T>(arr:T[]):T | undefined=> {
    return arr[0];
}

// Practice 03
const mergeObjects=<T, U>(obj1:T, obj2:U)=>{
    return {
        ...obj1,
        ...obj2
    }
}


