import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss'],
})
export class EditarNotaComponent  implements OnInit {
  nota: any;

  constructor(private route: ActivatedRoute, private router: Router, private notasService: NotasService) { }

  ngOnInit(): void{
    const notaId = this.route.snapshot.params['id'];
    this.nota = this.notasService.obtenerNotaSeleccionada(notaId);
  }

  guardarCambios() {
    this.notasService.actualizarNota(this.nota);
    this.router.navigate(['/detalles-nota', this.nota.id]);
  }

}
