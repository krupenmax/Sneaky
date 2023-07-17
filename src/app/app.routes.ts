import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    { 
        path: "",
        loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent) 
    },
];