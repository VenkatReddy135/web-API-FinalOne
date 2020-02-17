import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import {HttpClientModule} from '@angular/common/http';
import { CubePipe } from './cube.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    CubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
