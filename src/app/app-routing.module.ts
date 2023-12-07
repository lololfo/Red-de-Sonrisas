import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'patrocinadores', component: PatrocinadoresComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
