import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritepostComponent } from './writepost/writepost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { ResponseComponent } from './response/response.component';
import { FormsModule } from '@angular/forms';
import { ResponsePipePipe } from './response-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WritepostComponent,
    ReadpostComponent,
    ResponseComponent,
    ResponsePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ResponsePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
