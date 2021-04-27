import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadpostComponent } from './posts/readpost/readpost.component';
import { WritepostComponent } from './posts/writepost/writepost.component';

const routes: Routes = [
  {
    path: "readpost",
    component: ReadpostComponent
  },
  {
    path: "writepost",
    component: WritepostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
