// Generics interface 

interface User {
  name: string;
  age: number;
}

interface Product {
  title: string;
  price: number;
}

interface ApiResponse<T>{
    success:boolean,
    data:T,
}  

const user:ApiResponse<User>={
    success:true,
    data:{
        name:"Masud",
        age:26,
    }
}

const product:ApiResponse<Product>={
    success:true,
    data:{
        title:"laptop",
        price:234
    }
}

