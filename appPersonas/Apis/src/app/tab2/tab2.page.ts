import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  personas: any[] = [];
  mensajeError = '';

  constructor(private servicio: CountryService ) {}
ngOnInit() {
  this.servicio.obtenerPersonas().subscribe(data => {
    this.personas = data;
  },
  error => this.mensajeError = error);
  
                        // this utiliza vaeriable de la clase 
}
}
