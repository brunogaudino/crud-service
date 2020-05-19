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
    this.readData();
  }

  readData() {
    this.crudService.read().subscribe((result) => {

      this.flagNoDataToShow = false;
      this.listOfCourses = result;

    }, (error) => {

      console.log('Service error > ', error);
      this.flagNoDataToShow = true;
      this.listOfCourses = null;

    });

  }

  deleteData(idData: number) {
    this.crudService.delete(idData).subscribe(() => {
      this.readData();
      console.log('Data deleted!');
    });

  }

  updateData(dataForm: object) {
    this.crudService.update(dataForm).subscribe((result) => {
      console.log('return service ', result);
    }, (error) => {
      console.log('Return error ', error);
    });
  }

}
