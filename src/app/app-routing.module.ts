import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubspotComponent } from './hubspot/hubspot.component';

const routes: Routes = [
  {path: "", component: HubspotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
