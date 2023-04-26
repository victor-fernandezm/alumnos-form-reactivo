import { Component } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../model/alumno';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent {

  listadoAlumnos: Alumno[] = [];
  alumno: Alumno = {};
  
  constructor(private router: Router, private alumnosService: AlumnosService) {
    this.alumnosService.mostrar().subscribe(als => {
      this.listadoAlumnos = als;
    });
    router.navigate(["form"]);
  }
}
