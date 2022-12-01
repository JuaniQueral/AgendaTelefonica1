import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrarseComponent } from './registrarse/registrarse.component';
import { VerContactoComponent } from './ver-contacto/ver-contacto.component';
import { AgregarEditarContactoComponent } from './agregar-editar-contacto/agregar-editar-contacto.component';

const routes: Routes = [
  { path:'', component: RegistrarseComponent },
  { path:'registrarse', component:RegistrarseComponent },
  { path: 'verContacto', component: VerContactoComponent },
  { path: 'agregarEditarContacto', component: AgregarEditarContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
