import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WelcomePageRoutingModule } from './welcome-page.routing.module';
import { WelcomePageComponent } from './welcome-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        WelcomePageRoutingModule,
        FlexLayoutModule,
    ],
    declarations:[
        WelcomePageComponent
    ]
})
export class WelcomePageModule { }