import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {

  public errorString: String = "";
  public unit: Object[];
  public createdIn: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aoe2ClientService: Aoe2ClientService,
   )
    { }


  ngOnInit(): void {
    const name: string = this.route.snapshot.paramMap.get('name');
    this.getUnitDetail(name);
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

}
