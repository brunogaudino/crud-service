import { Injectable } from '@angular/core';
import { CrudSharedService } from "./shared/service/crud-shared.service";
import { HttpClient } from "@angular/common/http";

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
