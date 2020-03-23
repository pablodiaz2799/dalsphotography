import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';

@NgModule({
    imports: [
        CommonModule,
        AnimalsRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        AnimalsComponent
    ]
})
export class AnimalsModule { }
