import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpLoadingImgComponent } from './test-loading-img/http-loading-img.component';
import { HtmlLoadingImgComponent } from './test-loading-img/html-loading-img.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpLoadingImgComponent,
    HtmlLoadingImgComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
