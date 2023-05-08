import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { InitPageComponent } from './components/init-page/init-page.component';
import { CalculatorPageComponent } from './components/calculator-page/calculator-page.component';
import { HeaderComponent } from './components/header/header.component';
import {  HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { MatchResultComponent } from './components/match-result/match-result.component';

@NgModule({
  declarations: [
    AppComponent,
    InitPageComponent,
    CalculatorPageComponent,
    HeaderComponent,
    LoadingComponent,
    MatchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
