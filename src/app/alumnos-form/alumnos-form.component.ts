import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../model/alumno';
import { AlumnosService } from '../alumnos.service';

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

  constructor(private fbuilder: FormBuilder, private alumnosService: AlumnosService) {
    this.alumnos = fbuilder.group(this.alumno);
  }

  onSubmit(): void {
    this.alumno = this.alumnos.value;
    this.alumnosService.add(this.alumno);
  }
}
