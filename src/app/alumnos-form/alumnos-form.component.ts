import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../model/alumno';
import { AlumnosService } from '../alumnos.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent {
  alumno: Alumno = {
    id: 0,
    nombre: "",
    dni: "",
    horasFormacion: 0
  };

  alumnos: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private fbuilder: FormBuilder, private alumnosService: AlumnosService) {
    router.events.subscribe(() => {
      alumnosService.buscar(route.snapshot.queryParams['id'])?.subscribe(a => {
        this.alumno = a;
        this.alumnos.get('id')?.setValue(a.id);
        this.alumnos.get('nombre')?.setValue(a.nombre);
        this.alumnos.get('dni')?.setValue(a.dni);
        this.alumnos.get('horasFormacion')?.setValue(a.horasFormacion);
      });
      // let a = alumnosService.buscar(route.snapshot.queryParams['id']);
      // if(a) {
      //   this.alumno = a;
      //   this.alumnos.get('id')?.setValue(a.id);
      //   this.alumnos.get('nombre')?.setValue(a.nombre);
      //   this.alumnos.get('dni')?.setValue(a.dni);
      //   this.alumnos.get('horasFormacion')?.setValue(a.horasFormacion);
      // }
    });
    this.alumnos = fbuilder.group(this.alumno);
  }

  onSubmit(): void {
    this.alumno = this.alumnos.value;
    this.alumnosService.add(this.alumno);
  }
}
