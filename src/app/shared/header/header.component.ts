import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfopaginaService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string ): any {

  if ( termino.length < 1 ) {
    return;
  }

  this.router.navigate(['/search', termino]);

  }

}

