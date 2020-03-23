import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IgxDropDownModule, IgxToggleModule } from 'igniteui-angular';


// COMPONENTS
import { NavBarComponent } from './navbar/navbar.component';


@NgModule({
    exports: [
        CommonModule,
        NavBarComponent,

    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        IgxDropDownModule,
        IgxToggleModule
    ],
    declarations: [
        NavBarComponent,
    ]
})
export class SharedModule { }
