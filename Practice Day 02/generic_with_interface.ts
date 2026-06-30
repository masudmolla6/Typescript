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




interface Developer<T>{
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number;
    },
    smartWatch:T;
}

    interface SmartWatch{
        brand:string;
        model:string;
        display:string;
        heartTrack?:boolean;
        sleepTrack?:boolean;
    }


const poorDeveloper:Developer<{brand:string,model:string,display:string,sleepTrack:boolean}>={
    name:"Masud Rana",
    computer:{
        brand:"Walton",
        model:"A9",
        releaseYear:2019,
    },
    smartWatch:{
        brand:"apple",
        model:"34sd",
        display:"Gray",
        sleepTrack:true,
    }
}

const richDeveloper:Developer<SmartWatch>={
    name:"Karim KHan",
    computer:{
        brand:"lenovo",
        model:"A9",
        releaseYear:2025,
    },
    smartWatch:{
        brand:"apple",
        model:"34sd",
        display:"Gray",
        heartTrack:true,
    },
}

interface MeAndMyFriends<T>{
    MyInfo:T,
    KarimInfo:T,
    RahimInfo:T,
}


type PersonInfo={
    name:string;
    age:number;
    id:number;
}


const meAndMyFriends:MeAndMyFriends<PersonInfo>={
    MyInfo:{
        name:"Masud Rana",
        age:23,
        id:356,
    },
    KarimInfo:{
        name:"Masud Rana",
        age:23,
        id:356,
    },
    RahimInfo:{
        name:"Masud Rana",
        age:23,
        id:356,
    },
}




