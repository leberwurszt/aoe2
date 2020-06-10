import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

const BASE_URL: string = "https://age-of-empires-2-api.herokuapp.com/api/v1";
const UNITS_DIR: string = "units";
const CIVS_DIR: string = "civilizations";
const TECHS_DIR: string = "technologies";
const STRUCTS_DIR: string = "structures";
const UNIT_DIR: string = "unit";
const CIV_DIR: string = "civilization";
const TECH_DIR: string = "technology";
const STRUCT_DIR: string = "structure";

export interface CreatedIn {
  name: string;
  link: string;
}

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {

  public errorString: String = "";
  public unit: Object[];
  public createdIn: CreatedIn = {name: "", link: ""};


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aoe2ClientService: Aoe2ClientService,
   )
    { }

 
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const name = params['name'];
        this.getUnitDetail(name);
      }
    );
  }

  getUnitDetail(name: string) {
    this.aoe2ClientService.getUnitDetail(name).subscribe(
      data => {
        this.unit = data;
        console.log(this.unit);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading unit');
        this.getCreatedIn();
      }
    );
  }
/*
  getCreatedIn() {
    this.aoe2ClientService.getFromUrl(this.unit['created_in']).subscribe(
      data => {
        if(!data['name']) {                                 // some structure details have an array with multiple values
          this.createdIn = data[0]['name'];                 // in that case, get the name from first index
        }
        else {
          this.createdIn = data['name'];
        }
        console.log(this.createdIn);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading structure unit is created in');
      }
    );
  }
  */

  getCreatedIn() { 
    if(this.unit['created_in'].includes(BASE_URL)) {
      this.aoe2ClientService.getFromUrl(this.unit['created_in']).subscribe(
        data => {
          if(!data['name']) {                                 // some structure details have an array with multiple values
            this.createdIn.name = data[0]['name'];                 // in that case, get the name from first index
          }
          else {
            this.createdIn.name = data['name'];
          }
          this.createdIn.link = `/${STRUCT_DIR}/${this.createdIn.name}`;
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('done loading structure unit is created in');
        }
      );
    }
    else
    {
      this.createdIn.link = "";
      this.createdIn.name = this.unit['created_in'];
    }
  }
}
