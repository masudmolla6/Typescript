                  // ---string---

// const createPromise=():Promise<string>=>{
//     return new Promise<string>((resolve, reject)=>{
//         const data:string="Something";
//         if(data)
//             resolve(data)
//         else
//             reject("Failed To Load Data");
//     })
// }
                  // ---Number---

// const createPromise=():Promise<number>=>{
//     return new Promise<number>((resolve, reject)=>{
//         const data:number=3455;
//         if(data)
//             resolve(data)
//         else
//             reject("Failed To Load Data");
//     })
// }

                  // ---boolean---

const createPromise=():Promise<boolean>=>{
    return new Promise<boolean>((resolve, reject)=>{
        const data:boolean=true;
        if(data)
            resolve(data)
        else
            reject("Failed To Load Data");
    })
}



// const showData=async():Promise<boolean>=>{
//     const data:boolean=await createPromise();
//     return data;
// }

// const mainFun=async()=>{
//     const result=await showData();
//     console.log(result);
// }

// mainFun();


const getToDo=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data=await response.json();
    console.log(data);
}

getToDo();

function orderPizza() {
    return new Promise((resolve, reject) => {
        
    });
}