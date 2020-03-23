import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
