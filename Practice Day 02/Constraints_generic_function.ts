    
    const addToStudent = <T extends {id:number; name:string; email:string}>(student: T) => {
      const course = "Next Lavel Web Development";
      return {
        ...student,
        course,
      };
    };

const addStudent1=addToStudent({
    id:34,
    name:"Karim Khan",
    email:"karim@gmail.com",
})


const printId=<T extends {id:number}>(value:T):number=>{
    return value.id
}

const result=printId({id:345, name:"Masud Rana"});

console.log(result);

