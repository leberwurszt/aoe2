import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CivDetailComponent } from './civ-detail/civ-detail.component';
import { CivListComponent } from './civ-list/civ-list.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { TechListComponent } from './tech-list/tech-list.component';
import { StructureListComponent } from './structure-list/structure-list.component';
import { TechDetailComponent } from './tech-detail/tech-detail.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { StructureDetailComponent } from './structure-detail/structure-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'unit-list', component: UnitListComponent },
  { path: 'civ-list', component: CivListComponent },
  { path: 'tech-list', component: TechListComponent },
  { path: 'structure-list', component: StructureListComponent },
  { path: 'civilization/:name', component: CivDetailComponent },
  { path: 'tech/:name', component: TechDetailComponent },
  { path: 'unit/:name', component: UnitDetailComponent },
  { path: 'structure/:name', component: StructureDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
