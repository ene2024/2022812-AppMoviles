import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { NotaDetalleComponent } from './nota-detalle/nota-detalle.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';

@NgModule({
  declarations: [AppComponent, AgregarNotaComponent, ListaNotasComponent, NotaDetalleComponent, EditarNotaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
