import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DoctorsComponent } from './doctors/doctors.component';
import { AppComponent } from './app.component';
import { DoctorsService } from './doctors.service';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DoctorsService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
