import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit(): void {

  this.route.params
      .subscribe( parametros => {
        // console.log( parametros.id );
        this.productoService.getProducto( parametros.id )
              .subscribe ( (producto: ProductoDescripcion ) => {
                this.id = parametros.id;
                this.producto = producto;
              });


      } );

  }

}
