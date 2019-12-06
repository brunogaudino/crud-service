import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { CrudService } from '../crud.service';

@Component({
  selector: 'crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  curso$: Observable<any>;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
  
    this.curso$ = this.crudService.list().pipe(
      delay(2000),
      tap(console.log)
    )
    //console.log(this.curso$);
    // this.crud2Service.list().subscribe(resp => {
    //   console.log(resp);
    // })

  }

}
