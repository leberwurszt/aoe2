import { Component, OnInit } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-tech-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.css']
})
export class StructureListComponent implements OnInit {

  public errorString: String = "";
  public structures: Object[] = new Array();

  constructor(private aoe2ClientService: Aoe2ClientService) { }

  ngOnInit(): void {
    this.getStructures();
  }

  getStructures() {
    this.aoe2ClientService.getStructures().subscribe(
      data => {
        this.structures = data['structures'];
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading structures');
      }
    );
  }
}
