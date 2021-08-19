import { LowerCasePipe } from '@angular/common';
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
    { name: 'Andrei' , password:'andrei'},
      { name: 'Marius' , password:'marius'},
      { name: 'George', password:'george' },
      { name: 'Cristi' , password:'cristi'},
      { name: 'Ionut', password:'ionut' },
      { name: 'Pablo', password:'pablo' },
      { name: 'Carmen' , password:'carmen'},
      { name: 'Ioana' , password:'ioana'},
      { name: 'Miguel' , password:'miguel'},
      { name: 'Radu' , password:'radu'}
  ]; 
  Pizza: Pizza[]=[];  

  
  //aici sa stochez totul

  createDb() {
    const users = [
      { name: 'Andrei' , password:'andrei'},
      { name: 'Marius' , password:'marius'},
      { name: 'George', password:'george' },
      { name: 'Cristi' , password:'cristi'},
      { name: 'Ionut', password:'ionut' },
      { name: 'Pablo', password:'pablo' },
      { name: 'Carmen' , password:'carmen'},
      { name: 'Ioana' , password:'ioana'},
      { name: 'Miguel' , password:'miguel'},
      { name: 'Radu' , password:'radu'}
    ];
    const pizzas =[
      {
        id: 1,
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

  isDuplicate(name: string):boolean {

    return !!this.User.find((v) => { 
      return v.name === name;
    }) }
    
  passwordMatches( name: string, password: string):boolean {

      return !!this.User.find((v) => { 
         if( v.name === name)
         return v.password === password;
         else return false;
      }) } 
}
