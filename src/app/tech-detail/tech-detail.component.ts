import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {

  public errorString: String = "";
  public tech: Object[];
  public developsIn: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aoe2ClientService: Aoe2ClientService,
   )
    { }


  ngOnInit(): void {
    const name: string = this.route.snapshot.paramMap.get('name');
    this.getTechDetail(name);
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
}
