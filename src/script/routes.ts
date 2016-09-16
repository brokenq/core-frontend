import {Routes, RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {NgModuleFactoryLoader} from "@angular/core";
import {AsyncNgModuleLoader} from "../lib/script/async-ng-module-loader";
import {WebpackAsyncRoute} from "@angularclass/webpack-toolkit/dist/index";
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
        redirectTo: '/project',
        pathMatch: 'full'
    },
    {
        path: 'project',
        component: 'ProjectModule',
        canActivate: [WebpackAsyncRoute]
        // loadChildren: load(() =>
        //     require('es6-promise-loader!./controller/project/project-module')
        // , 'ProjectModule')
    }
];

export const APP_ROUTE_PROVIDERS: any[] = [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    // { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
];

export const ROUTES = RouterModule.forRoot(APP_ROUTES);