import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { delay, retry, catchError } from 'rxjs/operators';
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
        delay(100)
        // tap(console.log)
      );
  }

  readByParam(param: number) {
    return this.http.get<T[]>(this.API_URL + '/read-by-param/' + param, this.httpOptions);
  }

  create(dataForm: object): Observable<object> {
    return this.http.post<object>(this.API_URL + '/create', dataForm, this.httpOptions);
    // .pipe(
    //   tap((newData: object) => console.log('Data created ', newData)),
    //   catchError(this.handleError<object>('Service error: ', dataForm))
    // );
  }

  delete(idData: number ) {
    return this.http.delete<number>(this.API_URL + '/delete/' + idData, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  update(dataForm: object): Observable<object> {
    return this.http.put<object>(this.API_URL + '/update', dataForm, this.httpOptions);
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
