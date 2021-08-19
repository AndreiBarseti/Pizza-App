export interface User {
    name: string;
    password: string;
}

export class User {

    constructor(
      public name: string,
      public password: string,
    ) {  }
  
  }