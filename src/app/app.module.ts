import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResponseComponent } from './response/response.component';
import { FormsModule } from '@angular/forms';
import { ResponsePipePipe } from './response-pipe.pipe';
import { LocationComponent } from './location/location.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { PostsModule } from './posts/posts.module';

          
@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    ResponsePipePipe,
    LocationComponent,
    TopnavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PostsModule
  ],
  providers: [ResponsePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
