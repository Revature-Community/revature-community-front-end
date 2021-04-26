import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritepostComponent } from './components/writepost/writepost.component';
import { ReadpostComponent } from './components/readpost/readpost.component';

@NgModule({
  declarations: [
    AppComponent,
    WritepostComponent,
    ReadpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
