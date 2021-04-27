import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { ReadpostComponent } from './posts/readpost/readpost.component';
import { WritepostComponent } from './posts/writepost/writepost.component';


const routes: Routes = [
  { path: "readpost", component: ReadpostComponent },
  { path: "writepost", component: WritepostComponent },
  { path: "", component: LandingComponent },
  { path: "location", component:LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
