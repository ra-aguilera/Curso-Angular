import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  constructor(){
    console.log('constructor');
  }
  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('OnInit');
  }

  heroeBorrado: string = ''

  heroes: string[] = ['Spiderman', 'Goku', 'Luffy', 'Thorfin']
  borrarHeroe(): void{
    const heroeBorrado = this.heroes.shift() || ''
    this.heroeBorrado = heroeBorrado;
  }
}
