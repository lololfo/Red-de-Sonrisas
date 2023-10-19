import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComoApoyarComponent } from './como-apoyar/como-apoyar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavarComponent } from './navar/navar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComoApoyarComponent,
    QuienesSomosComponent,
    InicioComponent,
    NavarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
