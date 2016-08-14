import 'rxjs'
import 'reflect-metadata'
import 'es6-shim'
import 'zone.js/dist/zone'
import {browserDynamicPlatform} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app-module";

browserDynamicPlatform().bootstrapModule(AppModule);
