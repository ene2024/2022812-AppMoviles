import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-nota-detalle',
  templateUrl: './nota-detalle.component.html',
  styleUrls: ['./nota-detalle.component.scss'],
})
export class NotaDetalleComponent  implements OnInit {
  nota: any;

  constructor(private route: ActivatedRoute, private notasService: NotasService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const notaId = params['id'];
      this.nota = this.notasService.obtenerNotaSeleccionada(notaId);
    });
  }

  editarNota() {
    //Logica de la funcion
  }
}