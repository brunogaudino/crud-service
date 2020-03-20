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

  // course$: Observable<any>;
  // course: Observable<object>;
  listOfCourses: object = null;
  flagNoDataToShow = false;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    // this.course$ = this.crudService.list().pipe(
    //   delay(2000),
    //   tap(console.log)
    // )
    this.crudService.list().subscribe((result) => {
      console.log('result ', result);
      this.flagNoDataToShow = false;
      this.listOfCourses = result;
    }, (error) => {
      console.log('Error in the service > ', error);
      this.flagNoDataToShow = true;
      this.listOfCourses = null;
    });

  }

}
