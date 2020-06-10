import { Component } from '@angular/core';

enum ListItems {
  NONE,
  CIV,
  UNIT,
  TECH,
  STRUCT
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-aoe2';
  public listItems: ListItems = ListItems.NONE;

  linkCiv() {
    if(!this.checkCiv())
      this.listItems = ListItems.CIV;
    else
      this.listItems = ListItems.NONE;
  }

  linkUnit() {
    if(!this.checkUnit())
      this.listItems = ListItems.UNIT;
    else
      this.listItems = ListItems.NONE;
  }

  linkTech() {
    if(!this.checkTech())
      this.listItems = ListItems.TECH;
    else
      this.listItems = ListItems.NONE;
  }

  linkStruct() {
    if(!this.checkStruct())
      this.listItems = ListItems.STRUCT;
    else
      this.listItems = ListItems.NONE;
  }

  checkCiv(): boolean {
    if(this.listItems == ListItems.CIV)
      return true;
    else
      return false;
  }

  checkUnit(): boolean {
    if(this.listItems == ListItems.UNIT)
      return true;
    else
      return false;
  }

  checkTech(): boolean {
    if(this.listItems == ListItems.TECH)
      return true;
    else
      return false;
  }

  checkStruct(): boolean {
    if(this.listItems == ListItems.STRUCT)
      return true;
    else
      return false;
  }
}
