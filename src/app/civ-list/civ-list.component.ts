import { Component, OnInit } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-civ-list',
  templateUrl: './civ-list.component.html',
  styleUrls: ['./civ-list.component.css']
})
export class CivListComponent implements OnInit {

  public errorString: String = "";
  public civilizations: Object[] = new Array();

  constructor(private aoe2ClientService: Aoe2ClientService) { }

  ngOnInit(): void {
    this.getCivilizations();
  }

  getCivilizations() {
    this.aoe2ClientService.getCivilizations().subscribe(
      data => {
        this.civilizations = data['civilizations'];
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading civilizations');
      }
    );
  }
}
