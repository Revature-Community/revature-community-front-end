import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { WritepostComponent } from './components/writepost/writepost.component';
import { ReadpostComponent } from './components/readpost/readpost.component';

import { PostsService } from './posts.service';


@NgModule({
  declarations: [
    AppComponent,
    WritepostComponent,
    ReadpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
