import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from './tareas';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { ServicioTareasService } from '../Servicio/servicio-tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  message="";

  constructor(private modalCtrl: ModalController, private tareaserv: ServicioTareasService) { }

  ngOnInit() {}

  tareaNueva: Tarea = {
    titulo: '',
    fechames: '',
    fechaanio: '',
    descripcion: ''
  } 

  tareas: Tarea[] = []= this.tareaserv.tareas;

  eliminartarea(id: number){
    this.tareaserv.serveliminartarea(id);
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarTareaComponent,
    });
    return await modal.present();
  }

}
