import { HttpClient } from "@angular/common/http";
import { delay, tap } from 'rxjs/operators';

export class CrudSharedService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) {}

  list() {
    return this.http.get<T[]>(this.API_URL + '/read')
      .pipe(
        delay(100)
        //tap(console.log)
      );
  }

}