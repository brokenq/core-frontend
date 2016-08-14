import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectList} from "./project-list";
import {ProjectService} from "../../service/project-service";
import {ProjectView} from "./project-view";
import {PROJECT_ROUTES} from "./project-route";
import {RouterModule} from "@angular/router";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: '', component: ProjectList}
            // {path: ':id', component: ProjectView},
        ])
        // PROJECT_ROUTES
    ],
    declarations: [
        ProjectList,
        ProjectView
    ],
    providers: [
        ProjectService
    ]
})

export class ProjectModule {

}