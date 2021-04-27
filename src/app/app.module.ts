import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritepostComponent } from './writepost/writepost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { ResponseComponent } from './response/response.component';
import { FormsModule } from '@angular/forms';
import { ResponsePipePipe } from './response-pipe.pipe';
import { LocationComponent } from './location/location.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WritepostComponent,
    ReadpostComponent,
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
  ],
  providers: [ResponsePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
