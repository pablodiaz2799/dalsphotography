import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';



@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }
