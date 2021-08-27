import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
//import { USERS } from 'src/mock-users';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';
  public User: User [] = [];
  public currentUserLogIn = {} as User;
  public userLogOut = {} as User;
  public nameLog = new BehaviorSubject<any>({})


  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private inMemoryDataService: InMemoryDataService,)
     { }


     httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private log(message: string) {
      this.messageService.add(`UserService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T)
    {
      return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** GET users from the server */
 getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
    
}
getUser(username: string): Observable<User> {
  const url = `${this.userUrl}/${username}`;
  return this.http.get<User>(url).pipe(
  tap(_ => this.log(`fetched user username=${username}`)),
  catchError(this.handleError<User>(`getUser username=${username}`))
); }  
        
  addUser(user: User): Observable<User> {
    /*return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ name=${newUser.name}`)),
      catchError(this.handleError<User>('addUser'))
    ); */
    return of(user).pipe(tap(user => this.User.push(user)));
  }

  loginUser(user: User): Observable<User> {

    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => {

      this.log(`loged user w/ name=${newUser.username}`);
      const result = this.inMemoryDataService.User.find(({username}) => 
      username === newUser.username);
      if ( result )
      {this.currentUserLogIn = result;
      this.nameLog.next(this.currentUserLogIn); }
      else if(!result) {console.log("nu e userul");return;}
      console.log(this.currentUserLogIn)}),
      
      catchError(this.handleError<User>('loginUser')),
      
      
    )
    
  }
  getUserLoged() {
    return this.nameLog//.asObservable();
    
    //oricine foloseste de getUserLoged poate sa dea subscribe 
    // datelor din productList 
  }
  
  signOut() :void {
    this.currentUserLogIn = this.userLogOut;
    this.nameLog.next(this.currentUserLogIn);
    
  
  }

  
}
