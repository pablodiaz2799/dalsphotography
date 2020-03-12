import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageRoutingModule } from './welcome-page.routing.module';
import { WelcomePageComponent } from './welcome-page.component';


@NgModule({
    imports: [
        CommonModule,
        WelcomePageRoutingModule,
    ],
    declarations:[
        WelcomePageComponent
    ]
})
export class WelcomePageModule { }