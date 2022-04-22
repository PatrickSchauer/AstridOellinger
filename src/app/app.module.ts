import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MediationComponent } from './mediation/mediation.component';
import { UeberMichComponent } from './ueber-mich/ueber-mich.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CoachingComponent } from './coaching/coaching.component';
import { UnternehmensberatungComponent } from './unternehmensberatung/unternehmensberatung.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContactSectionComponent } from './shared/contact-section/contact-section.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MediationComponent,
    UeberMichComponent,
    KontaktComponent,
    CoachingComponent,
    UnternehmensberatungComponent,
    ContactSectionComponent,
    ImpressumComponent
  ],
    imports: [
        BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
