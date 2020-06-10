import { Component, OnInit } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  public errorString: String = "";
  public units: Object[] = new Array();

  constructor(private aoe2ClientService: Aoe2ClientService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits() {
    this.aoe2ClientService.getUnits().subscribe(
      data => {
        this.units = data['units'];
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading units');
      }
    );
  }
}
