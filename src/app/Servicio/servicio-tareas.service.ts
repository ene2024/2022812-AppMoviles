import { Injectable } from '@angular/core';
import { Tarea } from '../tareas/tareas';

@Injectable({
  providedIn: 'root'
})
export class ServicioTareasService {

  tareas: Tarea[]=[];

  constructor() { }

  servagregartarea(nuevatarea: Tarea){
    this.tareas.push(nuevatarea);
  }

  servgettarea(){
    return this.tareas;
  }

  serveliminartarea(id: number){
    this.tareas.splice(id,1);
  }

}
