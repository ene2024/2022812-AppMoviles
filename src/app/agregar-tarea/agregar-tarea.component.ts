import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../tareas/tareas';
import { ServicioTareasService } from '../Servicio/servicio-tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private tareaserv: ServicioTareasService) { }

  ngOnInit() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  nuevaTarea: Tarea = {
    titulo: '',
    fechames: '',
    fechaanio: '',
    descripcion: ''
  } 

  submit(){
    console.log("Submit form");
    this.tareaserv.servagregartarea(this.nuevaTarea); // Llama al método agregarTarea del servicio
    this.modalCtrl.dismiss(this.nuevaTarea);
  }

}
