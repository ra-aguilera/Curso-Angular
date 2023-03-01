import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias:Boolean = false;


  constructor(private paisService: PaisService) {}

  buscar( termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
      .subscribe({
        next: (paises) => { 
          this.paises = paises;
        },
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
        }
      });
  }

  sugerencias( termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( this.termino )
      .subscribe({
        next: (paises) => { 
          this.paisesSugeridos = paises.splice(0, 5);
        },
        error: (err) => { 
          this.paisesSugeridos = [];
        }
      });
  }
}
