import { Routes, RouterModule } from '@angular/router';

export const FULL_ROUTES: Routes = [ 
    {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'categories',
        loadChildren: () => import('../../categories/categories.module').then(m => m.CategoriesModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('../../contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'about',
        loadChildren: () => import('../../about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'animals',
        loadChildren: () => import('../../animals/animals.module').then(m => m.AnimalsModule)
    },

];
