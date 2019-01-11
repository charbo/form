import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Source } from '../model/datas/source';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SourceService {

  private sourceUrl = 'http://localhost:9191/source';  // URL to web api

  constructor(private http: HttpClient) { }

  getSources(): Observable<Source[]> {
    return this.http.get<Source[]>(this.sourceUrl)
      .pipe(
        tap(sources => this.log('fetched sources')),
        catchError(this.handleError('getSources', []))
      );
  }

  saveSource(source: Source): Observable<Source> {
    return this.http.post<Source>(this.sourceUrl, source, httpOptions).pipe(
      tap(s => this.log('save source')),
      catchError(this.handleError('getSources', source))
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
