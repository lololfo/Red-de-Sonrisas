import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavarComponent } from './navar/navar.component';

//PRIME NG
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//PRIME NG


@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    InicioComponent,
    NavarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    DataViewModule,
    StyleClassModule,
    RadioButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    FieldsetModule,
    TabViewModule,
    SidebarModule,
    DividerModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
