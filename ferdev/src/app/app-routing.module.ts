import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcrolComponent } from './pages/portafolio/acrol/acrol.component';
import { CentinelaComponent } from './pages/portafolio/centinela/centinela.component';
import { RhumanosComponent } from './pages/portafolio/rhumanos/rhumanos.component';
import { SigdComponent } from './pages/portafolio/sigd/sigd.component';
import { SigdMovilComponent } from './pages/portafolio/sigd-movil/sigd-movil.component';
import { SiviComponent } from './pages/portafolio/sivi/sivi.component';
import { TlackwaliComponent } from './pages/portafolio/tlackwali/tlackwali.component';
import { VentasComponent } from './pages/portafolio/ventas/ventas.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

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
    path: 'portafolio/acrol', component: AcrolComponent
  },
  {
    path: 'portafolio/centinela', component: CentinelaComponent
  },
  {
    path: 'portafolio/recursos-humanos', component: RhumanosComponent
  },
  {
    path: 'portafolio/sigd-web', component: SigdComponent
  },
  {
    path: 'portafolio/sigd-movil', component: SigdMovilComponent
  },
  {
    path: 'portafolio/sivi', component: SiviComponent
  },
  {
    path: 'portafolio/tlackwali', component: TlackwaliComponent
  },
  {
    path: 'portafolio/ventas', component: VentasComponent
  },
  {
    path: 'acerca-de', component: AcercadeComponent
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
