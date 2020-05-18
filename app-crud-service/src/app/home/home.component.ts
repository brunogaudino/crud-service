import { Component, OnInit, OnDestroy } from '@angular/core';

import { CrudService } from '../crud.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  listOfCourses: object = null;
  flagNoDataToShow = false;
  private subscription: Subscription;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.subscription = this.crudService.read().subscribe((result) => {
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
      this.getData();
      console.log('Data deleted!');
    });

  }

  getData() {
    this.crudService.read().subscribe((result) => {
      this.listOfCourses = result;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
