import { Component } from '@angular/core';
import { ProductosService } from './services/productos/productos.service';
import { CategoriasService } from './services/categorias/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Page';

  constructor(
      public ps:ProductosService,
      public cs:CategoriasService
   ){

  }

}
