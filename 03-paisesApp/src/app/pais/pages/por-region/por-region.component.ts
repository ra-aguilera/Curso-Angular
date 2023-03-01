import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC', 'EU'];
  regionActiva: string = '';
  paises: Country[] = [];


  getClase(region: string){
    return (region === this.regionActiva) 
          ? 'btn btn-primary' 
          : 'btn btn-outline-primary';
  }

  constructor(private paisService: PaisService){}

  activarRegion(region: string){
    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.getPaisPorRegion(this.regionActiva)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          this.paises = [];
        }
      });
  }

}