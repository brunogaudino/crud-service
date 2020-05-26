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

  readData(): void {
    this.crudService.read().subscribe((result) => {

      this.flagNoDataToShow = false;
      this.listOfCourses = result;

    }, (error) => {

      console.log('Service error > ', error);
      this.flagNoDataToShow = true;
      this.listOfCourses = null;

    });

  }

  deleteData(idData: number): void {
    this.crudService.delete(idData).subscribe(() => {
      this.readData();
      console.log('Data deleted!');
    });

  }

  updateData(dataForm: object): void {
    this.crudService.update(dataForm).subscribe((result) => {
      console.log('Return service updated ', result);
    }, (error) => {
      console.log('Return error component ', error);
    });
  }

}
