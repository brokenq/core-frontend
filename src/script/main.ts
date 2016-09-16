import "rxjs";
import "reflect-metadata";
import "es6-shim";
import "zone.js/dist/zone";
import {browserDynamicPlatform} from "@angular/platform-browser-dynamic";
import {provideWebpack} from "@angularclass/webpack-toolkit/dist/index";
import {provideRouter} from "@angular/router";
import {routes} from "./controller/about/routes";
import {AppModule} from "./app-module";

browserDynamicPlatform().bootstrapModule(AppModule, [
    provideRouter(routes),
    provideWebpack({
        'About': require('es6-promise!./controller/about/about')
        // 'ProjectModule': require('es6-promise!./controller/project/project-module'),
        // 'ProjectList': require('es6-promise!./controller/project/project-list'),
        // 'ProjectView': require('es6-promise!./controller/project/project-view')
    })
]);
