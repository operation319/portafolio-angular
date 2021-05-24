import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfopaginaService ) { }

  ngOnInit(): void {
  }

}
