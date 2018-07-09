import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoriasService {

    categorias:any[] = [];

    infoCategorias:boolean = false;

  constructor( private http:Http ) {

      this.cargarCategorias();

  }

  public cargarCategorias() {

      let promesa = new Promise(( resolve, reject )=>{

          this.http.get('../assets/data/categorias.json')
          .subscribe( data => {

              this.infoCategorias = true;
              this.categorias = data.json();
              console.log(this.categorias);
              resolve();

          });

      });

      return promesa;

  }

}
