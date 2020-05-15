import { Component, OnInit } from '@angular/core';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfCourses: object = null;
  flagNoDataToShow = false;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.crudService.read().subscribe((result) => {
      this.flagNoDataToShow = false;
      this.listOfCourses = result;
    }, (error) => {
      console.log('Error in the service > ', error);
      this.flagNoDataToShow = true;
      this.listOfCourses = null;
    });

  }

}
