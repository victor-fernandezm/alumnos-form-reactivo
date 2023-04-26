import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosListadoComponent } from './alumnos-listado/alumnos-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosFormComponent,
    AlumnosListadoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
