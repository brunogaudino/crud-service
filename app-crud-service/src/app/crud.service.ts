import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudSharedService } from './shared/service/crud-shared.service';

@Injectable({
  providedIn: 'root'
})

export class CrudService extends CrudSharedService<any> {

  constructor(
    protected http: HttpClient
  ) {
    super(http, 'http://localhost:3199');
   }
}
