import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritepostComponent } from './writepost/writepost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { ReponseComponent } from './reponse/reponse.component';

@NgModule({
  declarations: [
    AppComponent,
    WritepostComponent,
    ReadpostComponent,
    ReponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
