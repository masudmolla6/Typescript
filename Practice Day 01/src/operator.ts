// ternary operator
const age:number=17;
age >= 18 ? console.log("Adult") : console.log("Not Adult");

// nullish coalescing operator(null/undefine er opor base kore decision making kora)

const isAuthenticated=null;

// const result=isAuthenticated ?? "guest";
const result=isAuthenticated ? isAuthenticated : "Guest";

// console.log(result);

    type Myinfo = {
      myName: string;
      id: number;
      dept: string;
        address:{
            presentAddess:string;
            permanentAddress?: string;
        };
      contact: number;
    };

    const myInfo: Myinfo = {
      myName: "Masud Rana",
      id: 67,
      dept: "cse",
      address:{
        presentAddess:"Dakha",
      },
      contact: 1345,
    };

    const permanentAddress=myInfo?.address?.permanentAddress ?? "No PermenentAddress";
    console.log(permanentAddress);
