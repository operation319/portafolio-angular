import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-paginas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: Infopagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {


  this.cargarInfo();
  this.cargarEquipo();

   }

  private cargarInfo(): any {
    // Leer el Archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: Infopagina) => {

      this.cargada = true;
      this.info = resp;

  });
    }

private cargarEquipo(): any {

    // Leer el Archivo JSON
    this.http.get('https://angular-html-f551c-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe( (resp: any[]) => {

    this.equipo = resp;
    // console.log(resp);

  });

}

}
