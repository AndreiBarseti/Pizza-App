export interface User {
    id : number;
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    birthday: string;
    adress: string;
    city: string;
    postalCode: string;
    gender: string;
  
}

export class User {
    id : number;
    name: string;
    static username: string;
    static password: string;
    static email: string;
    phone: string;
    birthday: string;
    static adress: string;
    static city: string;
    static postalCode: string;
    gender: string;
  
   
    

    constructor(
     ) {  }
  
  }