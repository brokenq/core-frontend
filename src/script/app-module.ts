import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ROUTES, APP_ROUTE_PROVIDERS} from "./routes";
import {Dashboard} from "./controller/dashboard";
import {App} from "./app";
import {ProjectModule} from "./controller/project/project-module";
import {UserModule} from "./controller/user/user-module";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ROUTES,
        ProjectModule,
        UserModule
    ],
    declarations: [
        App,
        Dashboard,
    ],
    providers: [
        APP_ROUTE_PROVIDERS
    ],
    bootstrap: [
        App
    ]
})

export class AppModule {

}