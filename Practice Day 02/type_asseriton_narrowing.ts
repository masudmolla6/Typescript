// type asseriton

let anything:any;

anything="Masud Rana";

// (anything as string).
// (anything as number).

const kgToGram=(value: string | number):string | number| undefined=>{
    if(typeof value === "string"){
        const convertingValue=parseFloat(value)*1000;
        return convertingValue;
    }
    else if(typeof value === "number"){
        return value*1000;
    }
}

const result=kgToGram(1000) as number;
const result2=kgToGram("34") as string;

type CustomeError={
    message:string;
}

try{
    throw new Error("Something went wrong!");
}catch(error){
    console.log((error as CustomeError).message);
}