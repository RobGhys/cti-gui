import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Element } from '../element';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private elementsUrl = 'api/elements';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /********************************
   *            GET               *
   ********************************/

  /**
   * GET elements from the server
   * @Returns an Observable of an array of Element ||
   * @Returns 404 if there was an error
   * */
  getElements(): Observable<Element[]> {
    // Returns a untyped JSON object, with typescript capabilities
    return this.http.get<Element[]>(this.elementsUrl)
      .pipe( // catch an Observable that failed
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Element[]>('getElements', []))
      );
  }

  /**
   * GET element by id.
   * @Returns an Observable of a Element object ||
   * @Returns 404 if id not found
   * */
  getElementById(id: number): Observable<Element> {
    const url = `${this.elementsUrl}/${id}`;

    return this.http.get<Element>(url).pipe(
      tap(_ => this.log(`fetched element id=${id}`)),
      catchError(this.handleError<Element>(`getElementById id=${id}`))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Element> {
    const url = `${this.elementsUrl}/?id=${id}`;
    return this.http.get<Element[]>(url)
      .pipe(
        map(elements => elements[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} element id=${id}`);
        }),
        catchError(this.handleError<Element>(`getElement id=${id}`))
      );
  }

  /********************************
   *            POST              *
   ********************************/

  /** POST: add a new hero to the server */
  addElement(element: Element): Observable<Element> {
    return this.http.post<Element>(this.elementsUrl, element, this.httpOptions).pipe(
      tap((newElement: Element) => this.log(`added element with id=${newElement.id}`)),
      catchError(this.handleError<Element>('addElement'))
    );
  }

  /********************************
   *            PUT               *
   ********************************/

  /**
   * PUT: update the hero on the server
   * @Requires an instance of an Element
   * @Returns an Observable<any>
   *   */
  updateElement(element: Element): Observable<any> {
    return this.http.put(this.elementsUrl, element, this.httpOptions).pipe(
      tap(_ => this.log(`updated element id=${element.id}`)),
      catchError(this.handleError<any>('updateElement'))
    );
  }


  /********************************
   *            ERROR             *
   ********************************/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    // Returns a catchError handler function
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);

  }
}
