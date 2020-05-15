import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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

  create(dataForm: object): Observable<object> {
    return this.http.post<object>(this.API_URL + '/create', dataForm, this.httpOptions);
    // .pipe(
    //   tap((newData: object) => console.log('Data created ', newData)),
    //   catchError(this.handleError<object>('Service error: ', dataForm))
    // );
  }

  // private handleError<T>(operation = 'operation', result: T) {
  //   return (error: any): Observable<T> => {
  //     console.error('handleError ', error);
  //     console.log(operation + 'failed: ' + error.message);
  //     return of(error as T);
  //   };
  // }

}
