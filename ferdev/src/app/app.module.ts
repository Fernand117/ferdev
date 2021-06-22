import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { MenuComponent } from './components/menu/menu.component';
import { SiviComponent } from './pages/portafolio/sivi/sivi.component';
import { RhumanosComponent } from './pages/portafolio/rhumanos/rhumanos.component';
import { TlackwaliComponent } from './pages/portafolio/tlackwali/tlackwali.component';
import { VentasComponent } from './pages/portafolio/ventas/ventas.component';
import { AcrolComponent } from './pages/portafolio/acrol/acrol.component';
import { CentinelaComponent } from './pages/portafolio/centinela/centinela.component';
import { SigdComponent } from './pages/portafolio/sigd/sigd.component';
import { SigdMovilComponent } from './pages/portafolio/sigd-movil/sigd-movil.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    ProductosComponent,
    PortafolioComponent,
    MenuComponent,
    SiviComponent,
    RhumanosComponent,
    TlackwaliComponent,
    VentasComponent,
    AcrolComponent,
    CentinelaComponent,
    SigdComponent,
    SigdMovilComponent,
    AcercadeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
