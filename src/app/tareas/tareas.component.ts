import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from './tareas';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  message="";

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  tareaNueva: Tarea = {
    titulo: '',
    fechames: '',
    fechaanio: '',
    descripcion: ''
  } 

  tareas: Tarea[] = [];


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarTareaComponent,
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.tareaNueva=dataReturned.data;
      console.log(this.tareaNueva);
      this.tareas.push(this.tareaNueva)
    });
    return await modal.present();
  }

}
