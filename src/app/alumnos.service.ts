import { Injectable } from '@angular/core';
import { Alumno } from './model/alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private _alumnos: Alumno[] = [];
  constructor() { }

  public add(alumno: Alumno) {
    let a = this._alumnos.findIndex(v => v.id == alumno.id);
    console.log(a)
    if(a != -1)
      this._alumnos[a] = alumno;
    else
      this._alumnos.push(alumno);
  }

  public buscar(id: number): Observable<Alumno> {
    return of(this._alumnos.find(v => v.id == id)!);
  }

  public mostrar(): Observable<Alumno[]> {
    return of(this._alumnos);
  }
}
