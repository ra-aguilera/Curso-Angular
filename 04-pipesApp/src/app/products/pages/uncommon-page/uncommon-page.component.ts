import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Richard'
  public gender: 'male' |'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'gemale': 'invitarla'
  }

  changeClient():void {
    this.name = 'Violeta';
    this.gender = 'female';
  }


  //i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Richard'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient():void{
    this.clients.pop();
  }

  //KeyValue Pipe
  public person = {
    name: 'Richard',
    age: 27,
    address: 'Santiago, Chile'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( data => console.log('tap', data))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('Tenemos data de promesa');
      this.person.name = 'Aldair';
    }, 3500);
  });

}