import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        CategoriesComponent
    ]
})
export class CategoriesModule { }
