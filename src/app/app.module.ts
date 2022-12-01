import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { VerContactoComponent } from './ver-contacto/ver-contacto.component';
import { ListaDeLlamadasComponent } from './lista-de-llamadas/lista-de-llamadas.component';
import { ListaDeContactosComponent } from './lista-de-contactos/lista-de-contactos.component';
import { AgregarEditarContactoComponent } from './agregar-editar-contacto/agregar-editar-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    VerContactoComponent,
    ListaDeLlamadasComponent,
    ListaDeContactosComponent,
    AgregarEditarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
