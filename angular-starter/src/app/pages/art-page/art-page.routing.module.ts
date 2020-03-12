import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtPageComponent } from './art-page.component';

const routes: Routes = [
    {
        path: '',
        component: ArtPageComponent,
        data: {
            title: 'Art'
        },
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArtPageRoutingModule {}