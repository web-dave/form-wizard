import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FallComponent } from './fall/fall.component';
import { DatenComponent } from './daten/daten.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { FormularComponent } from './formular/formular.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, FallComponent, DatenComponent, DokumenteComponent, FormularComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
