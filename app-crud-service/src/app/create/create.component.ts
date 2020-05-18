import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CrudService } from '../crud.service';


@Component({
  selector: 'app-crud-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm) {
    // The API will generate the ID
    // const setIdTimeStamp = Date.now();
    // formData.controls.idTimeStamp.setValue(setIdTimeStamp);
    this.crudService.create(formData.value).subscribe(
      (returnData) => {
        console.log('Component created ', returnData);
      }, (error) => {
        console.log('Return error ', error);
      }
    );

    formData.reset();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 100);

  }

}
