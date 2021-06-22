import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmailModule {
  email: string;
  nombre: string;
  telefono: string;
  mensaje: string;
  constructor() {
    this.email = '';
    this.nombre = '';
    this.telefono = '';
    this.mensaje = '';
  }
}
