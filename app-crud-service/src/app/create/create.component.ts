import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CrudService } from '../crud.service';


@Component({
  selector: 'app-crud-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  returnDataService: any;
  flagUpdateData = false;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((paramValue) => {

      if (paramValue.id !== undefined) {
        this.flagUpdateData = true;
        this.crudService.readByParam(paramValue.id).subscribe((result) => {
          this.returnDataService = result;
          this.returnDataService = JSON.parse(this.returnDataService);
          this.returnDataService = this.returnDataService[0];
          return this.returnDataService;
        });

      } else {
        this.returnDataService = {};
        this.flagUpdateData = false;
      }
    });

  }

  onSubmit(formData: NgForm) {
    // The API will generate the ID
    // const setIdTimeStamp = Date.now();
    // formData.controls.idTimeStamp.setValue(setIdTimeStamp);
    if (this.flagUpdateData === true) {
      this.crudService.update(formData.value).subscribe(
        (returnData) => {
          console.log('Component updated ', returnData);
          formData.resetForm();
        }
      );

    } else {

      this.crudService.create(formData.value).subscribe(
        (returnData) => {
          console.log('Component created ', returnData);
          formData.resetForm();
        }, (error) => {
          console.log('Return error component ', error);
        }
      );

    }

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 100);

  }

}
