import { Routes, RouterModule } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: 'welcome',
        loadChildren: () => import('../../welcome/welcome.module').then(m => m.WelcomeModule)
    }
];
