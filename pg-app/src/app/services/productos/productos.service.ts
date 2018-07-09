import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

    productos:any[] = [];

    infoProductos:boolean = false;

  constructor( private http:Http ) {

      this.cargarProductos();

  }

  public cargarProductos() {

      let promesa = new Promise(( resolve, reject )=>{

          this.http.get('../assets/data/productos.json')
          .subscribe( data => {

              this.infoProductos = true;
              this.productos = data.json();
              console.log(this.productos);
              resolve();

          });

      });

      return promesa;

  }

}
