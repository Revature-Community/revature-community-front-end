import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { PostsModule } from './posts/posts.module';

import { PostsService } from './posts.service';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    HttpClientModule 
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
