import { CommonModule } from '@angular/common'
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.componen';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        //Componentes que tiene el modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //Que cosas quiero hacer publicas para ser utilizado fuera de este módulo
        ListadoComponent
    ],
    imports:[
        //Solo van módulos
        CommonModule
    ]
})
export class HeroesModule{

}