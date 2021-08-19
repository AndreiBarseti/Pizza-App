import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { USERS } from 'src/mock-users';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';
  public User: User [] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService)
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
  /** GET heroes from the server */
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
    // mai sus cand dadeam return faceam HEROES observable cu of
  // aici am schimbat cu http.get si ambele functii returneaza un obs of hero array type

}
        
  addUser(user: User): Observable<User> {
    /*return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ name=${newUser.name}`)),
      catchError(this.handleError<User>('addUser'))
    ); */
    return of(user).pipe(tap(user => this.User.push(user)));
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`loged user w/ name=${newUser.name}`)),
      catchError(this.handleError<User>('loginUser'))
    );
  }
  
}
