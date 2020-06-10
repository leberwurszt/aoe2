import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-civ-detail',
  templateUrl: './civ-detail.component.html',
  styleUrls: ['./civ-detail.component.css']
})
export class CivDetailComponent implements OnInit {

  public errorString: String = "";
  public civilization: Object[];
  public uniqueUnits: Object[] = new Array();
  public uniqueTechs: Object[] = new Array();

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
          this.getCivilizationDetail(name);
        }
      );
    }

  getUniqueUnits() {
    this.uniqueUnits.length = 0;
    this.civilization['unique_unit'].forEach(unitUrl => {
      this.aoe2ClientService.getFromUrl(unitUrl).subscribe(
        data => {
          this.uniqueUnits.push(data);
          console.log(this.uniqueUnits);
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('done loading unique unit');
        }
      );
    });
  }

  getUniqueTechs() {
    this.uniqueTechs.length = 0;
    this.civilization['unique_tech'].forEach(techUrl => {
      this.aoe2ClientService.getFromUrl(techUrl).subscribe(
        data => {
          this.uniqueTechs.push(data);
          console.log(this.uniqueTechs);
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('done loading unique tech');
        }
      );
    });
  }

  getCivilizationDetail(name) {
    this.aoe2ClientService.getCivilizationDetail(name).subscribe(
      data => {
        this.civilization = data;
        console.log(this.civilization);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading civilization');
        this.getUniqueUnits();
        this.getUniqueTechs();
      }
    );
  }

}
