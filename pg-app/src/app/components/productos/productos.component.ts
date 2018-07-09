import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos/productos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent {

  constructor(
      public ps:ProductosService,
      public cs:CategoriasService
      ) { }



}
