import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ tittle }} </h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)"> + {{base}} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})

export class ContadorComponent{
    tittle: string = 'Contador App';
    numero: number = 10

    base: number = 15

    acumular( valor: number){
        this.numero += valor;
    }
}