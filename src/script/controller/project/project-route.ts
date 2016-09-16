import {Routes, RouterModule} from "@angular/router";
import {ProjectModule} from "./project-module";
import {WebpackAsyncRoute} from "@angularclass/webpack-toolkit/dist/index";
const _PROJECT_ROUTES: Routes = <Routes>[
    {
        path: 'project',
        component: 'ProjectList',
        canActivate: [WebpackAsyncRoute]
        // loadChildren: load(() =>
        //     new Promise(resolve =>
        //         (require as any).ensure([], () =>
        //             resolve(require('./project-list'))
        //         )
        //     ), 'ProjectModule')
        // loadChildren: new SystemJsNgModuleLoader().load(require('es6-promise-loader!./project-list'))
        // loadChildren: require('es6-promise-loader!./project-list')
        // loadChildren: 'src/script/controller/project/project-list#ProjectList'
        // loadChildren: () => new Promise(resolve => {
        //     require.ensure([], require => {
        //         resolve(require('./project-list').ProjectList)
        //     });
        // })
    }, {
        path: 'project/:id',
        component: 'ProjectView',
        canActivate: [WebpackAsyncRoute],
        // loadChildren: load(() =>
        //     new Promise(resolve =>
        //         (require as any).ensure([], () =>
        //             resolve(require('./project-view'))
        //         )
        //     ), 'ProjectModule')
        // loadChildren: new SystemJsNgModuleLoader().load(require('es6-promise-loader!./project-view'))
        // loadChildren: require('es6-promise-loader!./project-view')
        // loadChildren: 'src/script/controller/project/project-view#ProjectView'
        loadChildren: () => new Promise(resolve => {
            require.ensure([], require => {
                resolve(require('./project-view').ProjectView)
            });
        })
    }
];

export const PROJECT_ROUTES = RouterModule.forChild(_PROJECT_ROUTES);
