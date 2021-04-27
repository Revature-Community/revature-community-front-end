import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadpostComponent } from './posts/readpost/readpost.component';
import { WritepostComponent } from './posts/writepost/writepost.component';
import { LocationlistComponent } from './locationlist/locationlist.component';

const routes: Routes = [
  {
    path: "readpost",
    component: ReadpostComponent
  },
  {
    path: "writepost",
    component: WritepostComponent
  },
  {path: 'locationlist', component:LocationlistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
