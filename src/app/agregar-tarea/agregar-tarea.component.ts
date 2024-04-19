import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../tareas/tareas';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

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

  sumbit(){
    console.log("Sumbit form");
    this.modalCtrl.dismiss(this.nuevaTarea);
  }

}
