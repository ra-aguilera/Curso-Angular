import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ){}

  ngOnInit(): void {
    //Suscribir a cualquier cambio de url usando rxjs
    this.activatedRoute.params
      .pipe(
        switchMap( ( {id} ) => this.paisService.getPaisPorAlpha( id) ),
        tap( console.log )
      )
      .subscribe( ( pais ) => this.pais = pais);

    //Suscribir a cualquier cambio de url
    // this.activatedRoute.params
    //   .subscribe( ( { id }) =>{
    //       console.log( id );
    //       this.paisService.getPaisPorAlpha(id)
    //         .subscribe({
    //           next: (pais) =>{
    //             console.log(pais);
    //           }
    //         })
    //   } )
  }

}
