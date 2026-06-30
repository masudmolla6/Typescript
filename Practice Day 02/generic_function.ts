function getValue<T>(value:T){
    return value;
}

const result=getValue<string>("Masud Rana");
const result1=getValue<number>(1243);
const result2=getValue<boolean>(true);
const result3=getValue<{name:string, id:number}>({name:"Masud Rana", id:234});

// console.log(result, result1);


function createApiResponse<T>(data:T){
    return {
        success:true,
        data,
    }
}

// const myData=createApiResponse<{myName:string, myAge:number}>({myName:"Masud Rana", myAge:34});
const myData=createApiResponse({myName:"Masud Rana", myAge:34});
const products = createApiResponse([
  {
    id: 1,
    title: "Laptop",
  },
  {
    id:2,
    title:"Bike",
  }
]);

// console.log(products);

function getFirstElement<T>(arr:T[]):T | undefined{
    return arr[0];
}

// const result6=getFirstElement([1, 2, 3]);
// const result6=getFirstElement(["a", "b", "c"]);
const result6=getFirstElement([
    {
       id:1,
       title:"Laptop"
    }
]);

console.log(result6);
