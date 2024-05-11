import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.component.html',
  styleUrls: ['./agregar-nota.component.scss']
})
export class AgregarNotaComponent  {

  tituloNota: string = '';
  descripcionNota: string = '';

  constructor(private modalController: ModalController, private notasService: NotasService) { }

  cerrarModal() {
    this.modalController.dismiss();
  }

  guardarNota() {
    const nuevaNota = {
      titulo: this.tituloNota,
      descripcion: this.descripcionNota
    };
    this.notasService.agregarNota(nuevaNota);
    this.cerrarModal();
  }
}