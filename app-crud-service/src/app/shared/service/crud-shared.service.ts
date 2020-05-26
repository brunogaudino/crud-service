import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { delay, retry, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CrudSharedService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'json'
  };

  read(): Observable<object> {
    return this.http.get<T[]>(this.API_URL + '/read')
      .pipe(
        delay(100),
        catchError(this.handleError)
      );
  }

  readByParam(param: number): Observable<object> {
    return this.http.get<T[]>(this.API_URL + '/read-by-param/' + param, this.httpOptions)
      .pipe(
        delay(100),
        catchError(this.handleError)
      );
  }

  create(dataForm: object): Observable<object> {
    return this.http.post<object>(this.API_URL + '/create', dataForm, this.httpOptions)
      .pipe(
        tap((newData: object) => console.log('Service return created ', newData)),
        catchError(this.handleError)
      );
  }

  delete(idData: number ): Observable<number> {
    return this.http.delete<number>(this.API_URL + '/delete/' + idData).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  update(dataForm: object): Observable<object> {
    return this.http.put<object>(this.API_URL + '/update', dataForm, this.httpOptions)
      .pipe(
        tap((changedData: object) => console.log('Service return updated ', changedData)),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client error
      errorMessage = error.error.message;
    } else {
      // Server error
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
