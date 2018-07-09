import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent {

  constructor(

  		public cs:CategoriasService

  	) { }

  

}
