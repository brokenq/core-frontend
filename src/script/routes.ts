import {Routes, RouterModule} from "@angular/router";
import {Dashboard} from "./controller/dashboard";
import {PageNotFound} from "./page-not-found";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {NgModuleFactoryLoader} from "@angular/core";
import {AsyncNgModuleLoader, load} from "../lib/script/async-ng-module-loader";
const APP_ROUTES: Routes = [
    // {
    //     path: 'dashboard',
    //     component: Dashboard
    // }/*, {
    //     path: '**',
    //     component: PageNotFound
    // }*/, {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    // }
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'project',
        loadChildren: load(() =>
            require('es6-promise-loader!./controller/project/project-module')
        , 'ProjectModule')
    }
];

export const APP_ROUTE_PROVIDERS: any[] = [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
];

export const ROUTES = RouterModule.forRoot(APP_ROUTES);