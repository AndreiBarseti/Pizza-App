import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  User: User[]=[
    { id: 4,name: 'Ionut' , username:'Hero', password:'ionut', email:'da@yahoo.com', phone:'0723422112', birthday:'22.03.1996', adress:'la mine acasa',city:'Mamaia', postalCode:'0100', gender:'male'}
  ] ; 
  Pizza: Pizza[]=[];  
  
  //aici sa stochez totul

  createDb() {
     const  users = [
      { id:4,name: 'Ionut' , username:'Hero', password:'ionut', email:'da@yahoo.com', phone:'0723422112', birthday:'22.03.1996', adress:'la mine acasa',city:'Mamaia', postalCode:'0100', gender:'male'},
      { id:1,name: 'Radu' , username:'X-Man', password:'radu', email:'nu@yahoo.com', phone:'0723422911', birthday:'21.01.1993', adress:'la mine acasa',city:'Constanta', postalCode:'0230', gender:'male'},
      { id:2,name: 'Mircea' , username:'Dr Octopus', password:'mircea', email:'poate@yahoo.com', phone:'0723422322', birthday:'02.19.2001', adress:'la mine acasa', city:'Iasi', postalCode:'4410', gender:'male'},
  
    ];
    const pizzas =[
      {
      id: 1,
      quantity: 0,
      name: "Pepperoni Pizza",
      image_url: "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aDM2L2g1Mi8xMzA5NzI3MzI2MjExMC5qcGd8N2MxZDhmNmI5ZTgzZDZlZWQyZGQ4YjFlZjUyNDlkMTExYjdkZDdlZmFkY2I0N2NmNjljOGViNmExZjIyMDU4Yw",
      topping: "Pepperoni",
      popularity: "Meat Eaters",
      description: "Classic marinara sauce topped with whole milk mozzarella cheese.",
      price: 27,
      alergeni:"lactose, gluten, mustard, soy",
      ingredients:"mix cheese (cheese + mozzarella), sos, dough, pepperoni",
      },
      {
        id:2,
        quantity: 0,
      name: "Meat Lovers",
      image_url: "https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-2.jpg",
      topping: "All the meat",
      popularity: "Meat Eaters",
      description: "Classic marinara sauce, authentic old-world pepperoni, all-natural Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned pork and beef.",
      price: 30,
      alergeni:"soy, gluten, mustard, celery, lactose, gluten",
      ingredients:"kaizer, chicken breast, salam demisec, salam spring, pork ham, mix cheese (cheese + mozzarella), sos, dough",
      },
      {
        id:3,
        quantity: 0,
      name: "Veggie Lovers",
      image_url: "https://i.pinimg.com/originals/4f/88/96/4f8896abe38f2f9d14c724f88023fa7d.jpg",
      topping: "All the veggies",
      popularity: "Vegetarians",
      description: "Classic marinara sauce made of 100% California grown vine-ripened tomatoes, fresh mushrooms, fresh red onions, fresh green bell peppers, Roma tomatoes and black olives.",
      price: 26.5,
      alergeni: "lactose, gluten",
      ingredients:"pepper, mushrooms, corn, mix cheese (cheese + mozzarella), sos, cherry tomatoes, dough, olives kalamata, red onions",
      },
      { id:4,
        quantity: 0,
        name: "Cheese Pizza",
      image_url: "https://www.countrysidecravings.com/wp-content/uploads/2017/03/three-cheese-pizza-picture.jpg",
      topping: "Cheese",
      popularity: "Everyone",
      description: "Classic marinara sauce topped with whole milk mozzarella cheese.",
      price: 25,
      alergeni:" lactose, eggs, gluten",
      ingredients:"moldy cheese, hard cheese specialty, mix cheese(cheese + mozzarella), sos, brie, dough",
      },];
    
    return {users, pizzas};
  }
  
 /*generatePassword(users: User[]): string
{

 return password = (users.name||LowerCasePipe);

 }
 */

 addUser(user: User): Observable<User> {
  /*return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
    tap((newUser: User) => this.log(`added user w/ name=${newUser.name}`)),
    catchError(this.handleError<User>('addUser'))
  ); */
  return of(user).pipe(tap(user => this.User.push(user)));
}

genId(user: User[]): number {
  return user.length > 0 
  ? Math.max(...user.map(user => user.id)) + 1
   : 1
   // cele 3 puncte iau tot din vectorul users
   // mapeaza, iar la final ia ultimul id, ii adauga 1
   // pentru a asigna un id unui erou adaugat fara
} 

modifyUser(username111: string,
  city:string, postalCode:string,
  deliveryAddress:string, email:string,
  password:string, phone:string ): void{
  const result = this.User.find(({username}) => username111 === username)
  
  console.log("aici");
  console.log(result);
  console.log("aici");
  if (result)
  {
    let nr = this.User.indexOf(result);
    result.postalCode = postalCode;
    result.adress = deliveryAddress;
    result.email = email;
    result.password = password;
    result.city = city;
    result.phone = phone;
    this.User.splice( nr, 1, result);
    
  }
  else {
    console.log("eroare")
  }

  
  
} 

  isDuplicate(username: string):boolean {

    return !!this.User.find((v) => { 
      return v.username === username;
    }) }
    
  passwordMatches( username: string, password: string):boolean {

      return !!this.User.find((v) => { 
         if( v.username === username)
         return v.password === password;
         else return false;
      }) } 
}
