import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritepostComponent } from './writepost/writepost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponseComponent } from './response/response.component';
import { ResponsePipePipe } from './response-pipe.pipe';
import { LocationComponent } from './location/location.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { PostsModule } from './posts/posts.module';

          
@NgModule({
  declarations: [
    AppComponent,
    WritepostComponent,
    ReadpostComponent,
    LocationlistComponent,
    ResponseComponent,
    ResponsePipePipe,
    LocationComponent,
    TopnavComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    PostsModule
  ],
  providers: [ResponsePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
