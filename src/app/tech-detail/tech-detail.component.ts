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
      }
    );
  }

}
