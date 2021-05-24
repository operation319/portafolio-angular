import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-paginas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: Infopagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {


  // console.log('Servicio de infoPagina listo');

    // Leer el Archivo JSON
  this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: Infopagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);

      });


   }
}
