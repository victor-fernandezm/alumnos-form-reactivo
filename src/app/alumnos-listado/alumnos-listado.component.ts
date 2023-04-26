import { Component } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../model/alumno';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent {

  listadoAlumnos: Alumno[] = [];
  alu: Alumno = {};
  
  constructor(private alumnosService: AlumnosService) {
    this.alumnosService.mostrar().subscribe(als => {
      this.listadoAlumnos = als;
    });
  }
  busc() {
    this.alumnosService.buscar(0).subscribe(al => {
      this.alu = al || {};
    });}
}
