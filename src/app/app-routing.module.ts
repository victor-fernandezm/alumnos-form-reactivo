import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListadoComponent } from './alumnos-listado/alumnos-listado.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';

const routes: Routes = [
  {path: '', component: AlumnosListadoComponent, children: [
    {path: 'form', component: AlumnosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
