import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CivListComponent } from './civ-list/civ-list.component';
import { CivDetailComponent } from './civ-detail/civ-detail.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { TechDetailComponent } from './tech-detail/tech-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CivListComponent,
    CivDetailComponent,
    UnitDetailComponent,
    TechDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
