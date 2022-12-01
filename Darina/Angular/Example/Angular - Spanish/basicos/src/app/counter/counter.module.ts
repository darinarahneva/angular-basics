import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/contador.component';



@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
      CounterComponent
    ]
})
export class ContadorModule {}
