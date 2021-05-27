import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public infoService: InfopaginaService ) { }

  ngOnInit(): void {
  }

}
