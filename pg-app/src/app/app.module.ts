import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Servicios
import { ProductosService } from './services/productos/productos.service';
import { CategoriasService } from './services/categorias/categorias.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarcaComponent } from './components/marca/marca.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { DescripcionEmpresaComponent } from './components/descripcionempresa/descripcionempresa.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RedesSocialesComponent } from './components/redessociales/redessociales.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FraseComponent } from './components/frase/frase.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarcaComponent,
    CarouselComponent,
    ProductosComponent,
    UbicacionComponent,
    ContactoComponent,
    NosotrosComponent,
    PromocionesComponent,
    DescripcionEmpresaComponent,
    CategoriasComponent,
    ServiciosComponent,
    RedesSocialesComponent,
    EquipoComponent,
    ClientesComponent,
    FraseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ProductosService,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
