import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { ReadpostComponent } from './posts/readpost/readpost.component';
import { WritepostComponent } from './posts/writepost/writepost.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  { path: "readpost", component: ReadpostComponent, canActivate: [AuthGuard] },
  { path: "writepost", component: WritepostComponent, canActivate: [AuthGuard] },
  { path: "", component: LandingComponent },
  { path: "location", component:LocationComponent, canActivate: [AuthGuard] },
  { path: "response", component:ResponseComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
