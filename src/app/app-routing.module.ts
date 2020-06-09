import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CivDetailComponent } from './civ-detail/civ-detail.component';
import { CivListComponent } from './civ-list/civ-list.component';
import { TechDetailComponent } from './tech-detail/tech-detail.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: CivListComponent },
  { path: 'civilization/:id', component: CivDetailComponent },
  { path: 'tech/:name', component: TechDetailComponent },
  { path: 'unit/:name', component: UnitDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
