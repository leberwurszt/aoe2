import { Component, OnInit } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {

  public errorString: String = "";
  public techs: Object[] = new Array();

  constructor(private aoe2ClientService: Aoe2ClientService) { }

  ngOnInit(): void {
    this.getTechs();
  }

  getTechs() {
    this.aoe2ClientService.getTechs().subscribe(
      data => {
        this.techs = data['technologies'];
        console.log(this.techs);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading technologies');
      }
    );
  }


}
