import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormsModule } from '@angular/forms';
import { FiliereComponent } from './filiere/filiere.component';
import { HttpClientModule }from '@angular/common/http';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { AccueilStagiaireComponent } from './accueil-stagiaire/accueil-stagiaire.component';
import { MatiereComponent } from './matiere/matiere.component'
import { FormateurComponent } from './formateur/formateur.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    StagiaireComponent,
    FiliereComponent,
    OrdinateurComponent,
    AccueilStagiaireComponent,
    MatiereComponent
    FormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
