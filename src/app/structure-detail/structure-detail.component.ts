import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Aoe2ClientService } from '../aoe2client.service'

@Component({
  selector: 'app-structure-detail',
  templateUrl: './structure-detail.component.html',
  styleUrls: ['./structure-detail.component.css']
})
export class StructureDetailComponent implements OnInit {

  public errorString: String = "";
  public structure: Object[];

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
          this.getStructureDetail(name);
        }
      );
    }

  getStructureDetail(name: string) {
    this.aoe2ClientService.getStructureDetail(name).subscribe(
      data => {
        if(data[0]) {                   // if index 0 is defined, there are mutliple values for this structure
          this.structure = data;        // the array will be kept this way
        }
        else {                          // otherwise, there is only one value of each kind
          this.structure = new Array();
          this.structure.push(data);    // the data will be appended to index 0 of the structure array
        }
        console.log(this.structure);
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('done loading structure');
      }
    );
  }

}
