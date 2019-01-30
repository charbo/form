import { ResourcesService } from './../service/resources.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Query } from '../model/datas/query';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class QueryService {

  private queryUrl = 'http://localhost:9191/query';  // URL to web api

  constructor(private http: HttpClient) { }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(this.queryUrl)
      .pipe(
        tap(queries => this.log('fetched queries')),
        catchError(this.handleError('getSources', []))
      );
  }

  saveQuery(query: Query): Observable<Query> {
    return this.http.post<Query>(this.queryUrl, query, httpOptions).pipe(
      tap(s => this.log('save query')),
      catchError(this.handleError('save query', query))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
