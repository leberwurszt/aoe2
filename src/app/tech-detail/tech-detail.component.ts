import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

export interface ApplyTo {
  name: string;
  link: string;
}

const BASE_URL: string = "https://age-of-empires-2-api.herokuapp.com/api/v1";
const UNITS_DIR: string = "units";
const CIVS_DIR: string = "civilizations";
const TECHS_DIR: string = "technologies";
const STRUCTS_DIR: string = "structures";
const UNIT_DIR: string = "unit";
const CIV_DIR: string = "civilization";
const TECH_DIR: string = "technology";
const STRUCT_DIR: string = "structure";

@Component({
  selector: 'app-tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {

  public errorString: String = "";
  public tech: Object[];
  public developsIn: String;
  public appliesTo: ApplyTo[] = new Array();

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
        this.getTechDetail(name);
      }
    );
  }

  getTechDetail(name: string) {
    this.aoe2ClientService.getTechDetail(name).subscribe(
      data => {
        this.tech = data;
        console.log(this.tech);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading tech');
        this.getDevelopsIn();
        this.getAppliesTo();
      }
    );
  }
  getDevelopsIn() {
    this.aoe2ClientService.getFromUrl(this.tech['develops_in']).subscribe(
      data => {
        if(!data['name']) {                                 // some structure details have an array with multiple values
          this.developsIn = data[0]['name'];                 // in that case, get the name from first index
        }
        else {
          this.developsIn = data['name'];
        }
        console.log(this.developsIn);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading structure name technology is developed in');
      }
    );
  }

  getAppliesTo() {
    this.appliesTo.length = 0;
    this.tech['applies_to'].forEach(appliesToData => {
      
      if(appliesToData.includes(BASE_URL)) {
        this.aoe2ClientService.getFromUrl(appliesToData).subscribe(
          data => {
            let appliesTo_: ApplyTo = {name: "", link: ""};

            if(!data['name']) {                                 // some structure details have an array with multiple values
              appliesTo_.name = data[0]['name'];                 // in that case, get the name from first index
            }
            else {
              appliesTo_.name = data['name'];
            }

            appliesTo_.link = '/';

            if(appliesToData.includes(UNIT_DIR))
              appliesTo_.link += UNIT_DIR;
            else if(appliesToData.includes(CIV_DIR))
              appliesTo_.link += CIV_DIR;
            else if(appliesToData.includes(TECH_DIR))
              appliesTo_.link += TECH_DIR;
            else if(appliesToData.includes(STRUCT_DIR))
              appliesTo_.link += STRUCT_DIR;
            appliesTo_.link += `/${appliesTo_.name}`;
            this.appliesTo.push(appliesTo_);
          },
          err => {
            console.error(err);
          },
          () => {
            console.log('done loading applying unit');
          }
        );
      }
      else
      {
        let appliesTo_: ApplyTo = {name: appliesToData, link: ""};
        this.appliesTo.push(appliesTo_);
      }
    });
  }
}
