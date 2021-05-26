import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'servicios', component: ServiciosComponent
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'portafolio', component: PortafolioComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
