// type MyInfo={
//     myName:string;
//     id:number;
//     email?:string;
//     gender:"Male"|"Female";
//     bloodgroup:"O+" | "A-" |"b+";
// }

// const myInfo:MyInfo={
//     myName:"Masud",
//     id:45,
//     gender:"Male",
//     bloodgroup:"O+",
// }

// // type Developer="Frontend" | "Backend";

// // const developer:Developer="Frontend";

type FrontendDeveloper={
    skill:string[];
    designation1:"Frontend Developer";
}

type BackendDeveloper={
    skill:string[];
    designation2:"Backend Developer";
}

type FullstackDeveloper=FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper:FullstackDeveloper={
    skill:["html", "css", "js"],
    designation1:"Frontend Developer",
    designation2:"Backend Developer",
}
