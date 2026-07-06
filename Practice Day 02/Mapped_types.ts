const arrayOfNumbers:number[]=[3,4,6,7,3,5];

const arrayOfString:string[]=arrayOfNumbers.map(num=>{
    return num.toString();
})

// console.log(arrayOfString);

type AreaNumber={
    height:number;
    width:number;
}

// type Height=AreaNumber["height"];

// type AreaString={
//     [key in keyof AreaNumber]:string;
// }

type Area<T>={
    [key in keyof T]:T[key];
}

const area:Area<{height:number, width:number}>={
    height:120,
    width:435,
}

console.log(area);