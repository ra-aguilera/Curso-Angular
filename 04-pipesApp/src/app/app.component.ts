import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'richArd aguilerA';
  valor:number = 1000
  obj = {
    nombre:'Richard'
  }

  mostrarNombre(){
  }


}
