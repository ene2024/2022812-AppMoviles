import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotaDetalleComponent } from './nota-detalle/nota-detalle.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';

const routes: Routes = [
  { path: 'lista-notas', component: ListaNotasComponent },
  { path: 'agregar-nota', component: AgregarNotaComponent }, // Ruta para agregar nota
  { path: 'editar-nota/:id', component: EditarNotaComponent }, 
  { path: 'nota-detalle/:id', component: NotaDetalleComponent },
  { path: '', redirectTo: '/lista-notas', pathMatch: 'full' }, // Redirección predeterminada
  { path: '**', redirectTo: '/lista-notas' } // Redirección para cualquier ruta no definida
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
