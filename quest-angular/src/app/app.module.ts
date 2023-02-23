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
import { FormateurComponent } from './formateur/formateur.component'
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    StagiaireComponent,
    FiliereComponent,
    OrdinateurComponent,
    LoginComponent,
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
