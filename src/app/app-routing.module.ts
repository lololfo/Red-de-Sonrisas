import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoApoyarComponent } from './como-apoyar/como-apoyar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'como-apoyar', component: ComoApoyarComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'inicio', component: InicioComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
