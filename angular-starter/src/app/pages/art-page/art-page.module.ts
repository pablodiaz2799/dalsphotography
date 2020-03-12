import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtPageRoutingModule } from './art-page.routing.module';
import { ArtPageComponent } from './art-page.component';


@NgModule({
    imports: [
        CommonModule,
        ArtPageRoutingModule,
    ],
    declarations:[
        ArtPageComponent
    ]
})
export class ArtPageModule { }