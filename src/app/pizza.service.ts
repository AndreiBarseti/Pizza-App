import { Injectable } from '@angular/core';
import { Pizza } from './pizza'; 
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

 @Injectable({
  providedIn: 'root'
  // permmite serviciului sa fie folosit ca un singleton prin aplicatie 
 }
 )

 export class PizzaService {
  private pizzasUrl = 'api/pizzas';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
 
 
 /** GET heroes from the server */
 getPizzas(): Observable<Pizza[]> {
  return this.http.get<Pizza[]>(this.pizzasUrl)
    .pipe(
      tap(_ => this.log('fetched pizzas')),
      catchError(this.handleError<Pizza[]>('getPizzas', []))
    );
    // mai sus cand dadeam return faceam HEROES observable cu of
  // aici am schimbat cu http.get si ambele functii returneaza un obs of hero array type

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
  
  /** GET pizza by id. Will 404 if name not found */
 getPizza(id: number): Observable<Pizza> {
    const url = `${this.pizzasUrl}/${id}`;
    return this.http.get<Pizza>(url).pipe(
    tap(_ => this.log(`fetched pizza name=${id}`)),
    catchError(this.handleError<Pizza>(`getPizza id=${id}`))
  );
  /*
 getHero() constructs a request URL with the desired hero's id.
 The server should respond with a single hero rather than an 
  array of heroes.
 getHero() returns an Observable<Hero> ("an observable of Hero 
  objects") rather than an observable of hero arrays .
  */
}

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`PizzaService: ${message}`);
}




 }






 