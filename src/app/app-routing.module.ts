import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationlistComponent } from './locationlist/locationlist.component';

const routes: Routes = [
  {path: 'locationlist', component:LocationlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
